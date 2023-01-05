import CryptoJS from 'crypto-js';


export const EncryptData = ( data={} ) => {
    return  CryptoJS.AES.encrypt(JSON.stringify(data), String(process.env.CHIPER_KEY)).toString();
}


export const DecryptData = () => {
    return JSON.parse(CryptoJS.AES.decrypt(data, String(process.env.CHIPER_KEY)).toString(CryptoJS.enc.Utf8));
}