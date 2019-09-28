import api from '../services/Api';

export default {
    fetchItems() {
        return api.get('items');
    },
    fetchOneItem(idItem) {
        return api.get(`viewitem/${idItem}`);
    },
    fetchTimetableItems() {
        return api.get('timetableitems');
    }
}