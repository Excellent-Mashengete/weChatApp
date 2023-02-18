import { API } from '../environment/environment';
import axios from 'axios';
import { Register } from '../interface/Register';
import { Login } from '../interface/Login';

const register = (data:Register) => {
    return axios.post(`${API}/api/register`, data);
}

const login = (data:Login) => {
    return axios.post(`${API}/api/login`, data);
}
 
const functions ={
    register,
    login
}

export default functions;