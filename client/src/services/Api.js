import axios from 'axios';

import store from '../store';

const api = axios.create({
        baseURL: `http://localhost:5000`,
        headers: { 
            Authorization: `Bearer ${store.state.token}`
        }
    });

export default api;
