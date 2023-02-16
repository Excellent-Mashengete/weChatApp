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
    if (!date) {
      return 'a long time ago';
    }
    let time = (Date.now() - Date.parse(date)) / 1000;
    if (time < 10) {
      return 'just now';
    } else if (time < 60) {
      return 'a second ago';
    }
    const divider = [60, 60, 24, 30, 12];
    const string = [' second', ' minute', ' hour', ' day', ' month', ' year'];
    let i;
    for (i = 0; Math.floor(time / divider[i]) > 0; i++) {
      time /= divider[i];
    }
    const plural = Math.floor(time) > 1 ? 's' : '';
    if (i === 3) {
      const dateObject = new Date(Date.parse(date));
      return dateObject.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    }
    return Math.floor(time) + string[i] + plural + ' ago';
}