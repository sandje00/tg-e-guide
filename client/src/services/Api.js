import axios from 'axios';

import store from '../store';

const PORT = process.env.VUE_APP_PORT;

export default () => {
    return axios.create({
        baseURL: `http://localhost:${PORT}`,
        headers: { 
            Authorization: `Bearer ${store.state.token}`
        }
    });
}