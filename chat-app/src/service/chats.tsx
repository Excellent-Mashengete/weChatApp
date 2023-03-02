import axios from 'axios';
import { API } from '../environment/environment';

const chattingContacts = (data:any) => {
    return axios.get(`${API}/api/getallchats/${data}`);
}

const functions ={
    chattingContacts,
}

export default functions;