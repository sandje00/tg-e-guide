import axios from 'axios';

import store from '../store';

const PORT = process.env.VUE_APP_PORT;

const api = axios.create({
        baseURL: `http://localhost:${PORT}`,
        headers: { 
            Authorization: `Bearer ${store.state.token}`
        }
    });

export default api;