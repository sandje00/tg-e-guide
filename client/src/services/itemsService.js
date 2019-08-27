import Api from '../services/Api';

export default {
    fetchItems() {
        return Api().get('items');
    },
    fetchOneItem(idItem) {
        return Api().get(`gettingaround/${idItem}`);
    },
    fetchTimetableItems() {
        return Api().get('timetableitems');
    }
}