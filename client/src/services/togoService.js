import Api from '../services/Api';

export default {
    addItem(togo) {
        return Api().post('additem', togo);
    },
    addTimetableItem(togo) {
        return Api().post('addtimetableitem', togo);
    },
    showItems(user) {
        return Api().get('showitems', user);
    },
    showTimetableItems(user) {
        return Api().get('showtimetableitems', user);
    }
}