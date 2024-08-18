import axios from 'axios';

const instance = axios.create({
    //baseURL: 'http://localhost:5000/api',
    baseURL: 'https://backend-magiclog.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default instance;