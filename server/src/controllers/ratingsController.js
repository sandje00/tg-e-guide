const {Rating} = require("../models");

module.exports = {
    async fetchRatings(req, res) {
        try {
            const ratings = await Rating.findAll({
                where: {
                    ItemIdItem: req.params.idItem
                },
                order: [
                    ['createdAt', 'DESC']
                ]
            });
            res.send(ratings);
        }
        catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch ratings.'
            });
        }
    },
    async addRating(req, res) {
        try {
            const grade = req.body.grade;
            if(!grade) {
                res.status(400).send({
                    error: 'You should provide a grade for this item.'
                });
            }

            const rating = await Rating.create(req.body);

            res.send(rating);
        }
        catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch ratings.'
            });
        }
    }
};