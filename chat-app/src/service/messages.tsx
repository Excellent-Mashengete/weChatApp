import axios from 'axios';
import { API } from '../environment/environment';

const Groupmessages = (data:any) => {
    return axios.get(`${API}/api/gmessages/${data}`);
}

const Singlemess = (data:any) => {
    return axios.post(`${API}/api/gmessages`, data);
}

const sendOneMess = (data:any) => {
    return axios.post(`${API}/api/postindividual`, data);
}

const sendGroup = (data:any) => {
    return axios.post(`${API}/api/postgroup`, data);
}

const functions ={
    Groupmessages,
    Singlemess,
    sendOneMess,
    sendGroup
}

export default functions;