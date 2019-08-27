import Api from '../services/Api';

export default {
    fetchItems() {
        return Api().get('items');
    },
    fetchOneItem(idItem) {
        return Api().get(`viewitem/${idItem}`);
    },
    fetchTimetableItems() {
        return Api().get('timetableitems');
    }
}