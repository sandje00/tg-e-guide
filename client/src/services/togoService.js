import Api from '../services/Api';

export default {
    addItem(togo) {
        return Api().post('additem', togo);
    },
    addTimetableItem(togo) {
        return Api().post('addtimetableitem', togo);
    },
    showItems(UserUsername) {
        return Api().get('showitems', UserUsername);
    },
    showTimetableItems(UserUsername) {
        return Api().get('showtimetableitems', UserUsername);
    }
}