import Api from '../services/Api';

export default {
    fetchItems() {
        return Api().get('items');
    },
    fetchTimetableItems() {
        return Api().get('timetableitems');
    }
}