import Api from '../services/Api';

export default {
    getAllItems() {
        return Api().get('items');
    }
}