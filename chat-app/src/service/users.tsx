import { API } from "../environment/environment";
import axios from 'axios';

const getUser = (id:any) => {
    return axios.get(`${API}/api/users/${id}`);
}
 
const functions = {
    getUser
}

export default functions;