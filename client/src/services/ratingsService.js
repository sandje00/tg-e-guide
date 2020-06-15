import api from '../services/Api';

export default {
    fetchRatings(idItem) {
        return api().get(`ratings/${idItem}`);
    },
    addRating(rating) {
        return api().post('rate', rating);
    }
}