import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ticket-system-51e49.firebaseio.com/'
});

export default instance;