import Api from '../services/Api';

export default {
    fetchRatings(idItem) {
        return Api().get(`ratings/${idItem}`);
    },
    addRating(rating) {
        return Api().post('rate', rating);
    }
}