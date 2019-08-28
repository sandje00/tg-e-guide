import Api from '../services/Api';

export default {
    addToGo(togo) {
        return Api().post('addtogo', togo);
    }
}