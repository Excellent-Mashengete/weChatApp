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