import { API } from "../environment/environment";
import axios from 'axios';

const getUser = () => {
    return axios.get(`${API}/api/users`);
}
 
const functions ={
    getUser
}

export default functions;