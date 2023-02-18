import jwt_decode from 'jwt-decode';
import { AUTH_TOKEN } from "../environment/environment";

export const getToken = () => {
    return localStorage.getItem(AUTH_TOKEN);
};

export const setToken = (token:any) => {
    if (token) {    
        localStorage.setItem(AUTH_TOKEN, token);
    }
};

export const removeToken = () => {
    localStorage.clear();
};

export const decodedToken = () => {
    const token:any = getToken();
    const decoded:any = jwt_decode(token);
    return decoded;
}

export const transform = (date: string) => {
    if (!date) {return 'long time ago'}
    
    let time = (Date.now() - Date.parse(date)) / 1000;
    
    if (time < 5) {
      return 'just now';
    } else if (time < 60) {
      return time + ' seconds';
    } else if (time < 3600) {
      return Math.floor(time / 60) + ' minutes';
    } else if (time < 86400) {
      const dateObject = new Date(Date.parse(date));
      return dateObject.getHours()+ ":" + dateObject.getMinutes()
    } else if(time < 126400){
      return "yesterday"; 
    }else {
      const dateObject = new Date(Date.parse(date));
      return dateObject.toLocaleDateString('en-ZA');
    }
}