
export const setLocalStorage = (key, obj) => {
  localStorage.setItem(key, obj);
  return true
}

export const getLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return value ? value : null;
}

export const deleteLocalStorage = (key) => {
  localStorage.removeItem(key);
}
export const clearLocalStorage = ()=>{
  deleteLocalStorage('access_token')
  deleteLocalStorage('refresh_token')
}