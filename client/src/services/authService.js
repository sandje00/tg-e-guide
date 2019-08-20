import Api from '../services/Api';

export default {
    register(user_data) {
        return Api().post('register', user_data);
    }
}