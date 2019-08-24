import Api from '../services/Api';

export default {
    signup(user_data) {
        return Api().post('signup', user_data);
    },
    signup(user_data) {
        return Api().post('signin', user_data);
    }
}