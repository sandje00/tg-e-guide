import api from '../services/Api';

export default {
    signup(user_data) {
        return api.post('signup', user_data);
    },
    signin(user_data) {
        return api.post('signin', user_data);
    }
}