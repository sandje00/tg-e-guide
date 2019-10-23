const {Rating} = require('../models');

module.exports = {
    async fetchRatings(req, res) {
        await Rating.findAll({
            where: {
                idItem: req.params.idItem
            },
            order: [
                ['createdAt', 'DESC']
            ]
        })
            .then(ratings => {
                return res.status(200).send(ratings);
            })
            .catch(err => {
                return res.status(500).send({
                    error: err.message
                })
            });
    },
    async addRating(req, res) {
        try {
            const grade = req.body.grade;
            if(!grade) {
                return res.status(400).send({
                    error: 'You should provide a grade for this item.'
                });
            }

            const rating = await Rating.create(req.body);

            return res.status(201).send(rating);
        }
        catch(err) {
            return res.status(500).send({
                error: err.message
            });
        }
    }
};