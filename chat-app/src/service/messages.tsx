import { API } from "../environment/environment";
import axios from 'axios';

const getMessages = (data:any) => {
    return axios.post(`${API}/api/messages`, data);
}

const sendTextMessages = (data:any) => {    
    console.log(data);
    
    return axios.post(`${API}/api/sendmessags`, data);
}

const functions ={
    getMessages,
    sendTextMessages
}

export default functions;