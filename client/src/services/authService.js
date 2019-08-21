import Api from '../services/Api';

export default {
    signup(user_data) {
        return Api().post('signup', user_data);
    }
}