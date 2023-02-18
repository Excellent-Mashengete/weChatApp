import { APIL } from '../environment/environment';
import axios from 'axios';
import { Register } from '../interface/Register';
import { Login } from '../interface/Login';

const register = (data:Register) => {
    return axios.post(`${APIL}/api/register`, data);
}

const login = (data:Login) => {
    return axios.post(`${APIL}/api/login`, data,{
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
}
 
const functions ={
    register,
    login
}

export default functions;