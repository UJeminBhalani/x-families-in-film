import CryptoJS from 'crypto-js';
const token = process.env.REACT_APP_ENCRYPT_DECRYPT_TOKEN 
const Encrypt = (data) => {
  const encryptData = CryptoJS.AES.encrypt(JSON.stringify(data), token).toString();
  return encryptData
}
const Decrypt = (data) => {
  const bytesData = CryptoJS.AES.decrypt(data, token)
  return JSON.parse(bytesData.toString(CryptoJS.enc.Utf8));
}
export { Encrypt, Decrypt }