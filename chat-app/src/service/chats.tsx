import {io} from 'socket.io-client';
import { API } from '../environment/environment';
const socket = io(API);

export default socket;

