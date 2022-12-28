
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginState } from "../../Reducers/Login/loginSlice";
import { GetCookie } from "../Cookiees";
import { decodeJwt, isTokenExpired } from "../DecodeEncode";
import { Decrypt } from "../EncryptDecrypt"
import { login, tokenReplace } from "../https/Auth/Auth";
import { axiosInstance } from "../https/interceptor";
import { clearLocalStorage, getLocalStorage, setLocalStorage } from "../storage";
import { store } from "../../../store";
import { Navigate, useNavigate } from "react-router-dom";
export const LoginWithCookie = async (Cdata) => {
    const userDetails = Decrypt(Cdata)
    const data = userDetails[0]
    return login('/sign-in', data).then((loginResponse) => {
        if (loginResponse.status === 200) {
            const access_token = loginResponse.data.data.access_token
            const refresh_token = loginResponse.data.data.refresh_token
            setLocalStorage('access_token', access_token)
            setLocalStorage('refresh_token',refresh_token)
            return true
        }
    })
}

 