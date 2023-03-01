import axios from 'axios';
import { API } from '../environment/environment';

const verifyUser = (data:any) => {
    console.log(API);
    return axios.post(`${API}/api/verify`, data);
}

const register = (data:any) => {
    return axios.post(`${API}/api/register`, data);
}

const login = (data:any) => {
    return axios.post(`${API}/api/login`, data,{
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
}

const functions ={
    verifyUser,
    register,
    login
}

export default functions;