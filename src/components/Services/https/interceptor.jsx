import axios from 'axios' 
import { loginState } from '../../Reducers/Login/loginSlice';
import { store } from '../../../store';
import { GetCookie } from '../Cookiees'; 
import { Decrypt } from '../EncryptDecrypt';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '../storage'; 
export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async config => {
  const token = getLocalStorage('access_token') && getLocalStorage('access_token')
  const lang = localStorage.getItem('i18nextLng')
  config.baseURL = process.env.REACT_APP_API_URL
  config.headers = {
    'X-Localization': `${lang === 'fr' ? 'fr-FR' : 'en'}`
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, error => {
  Promise.reject(error)
})
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.response.use(async (response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  console.log(originalRequest);
  if (error.response.status === 401 && !originalRequest._retry && !originalRequest.url==='/sign-in') {
    if (isRefreshing) {
      return new Promise(function (resolve, reject) {
        failedQueue.push({ resolve, reject });
      })
        .then(token => {
          originalRequest.headers['Authorization'] = 'Bearer ' + token;
          return axios(originalRequest);
        })
        .catch(err => {
          return Promise.reject(err);
        });
    }
    originalRequest._retry = true;
    isRefreshing = true;
    const refresh_token = getLocalStorage('refresh_token')
    return new Promise(function (resolve, reject) {
      axiosInstance.post('refresh-token', { refresh_token }).then((response) => {
        const access_token = response.data.data.access_token
        const refresh_token = response.data.data.refresh_token
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
        originalRequest.headers['Authorization'] = 'Bearer ' + access_token
        setLocalStorage('access_token', access_token)
        setLocalStorage('refresh_token', refresh_token)
        processQueue(null, access_token);
        resolve(axios(originalRequest));
      })
        .catch(err => {
          const cookieData = GetCookie('re_used')
          if (cookieData) {
            const userDetails = Decrypt(cookieData)
            const data = userDetails[0]
            return new Promise(function (resolve, reject) {
              axiosInstance.post('sign-in', data).then((response) => {
                const access_token = response.data.data.access_token
                const refresh_token = response.data.data.refresh_token
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
                originalRequest.headers['Authorization'] = 'Bearer ' + access_token
                setLocalStorage('access_token', access_token)
                setLocalStorage('refresh_token', refresh_token)
                processQueue(null, access_token);
                resolve(axios(originalRequest));
              })
            })
          }
          else {  
            processQueue(err, null);
            store.dispatch(loginState({ loggedIn: false, role: null, access_token: null, name: null, role_data: null }))
            clearLocalStorage() 
            reject(err);
          }
        })
        .then(() => {
          isRefreshing = false;
        });
    });
  }

  return Promise.reject(error);
});   