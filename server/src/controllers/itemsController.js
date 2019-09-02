const sequelize = require('sequelize');

const {Item} = require('../models');
const {TimetableItem} = require('../models');
const {Rating} = require('../models');

module.exports = {
    async fetchItems(req, res) {
        await Item.findAll({
            attributes: ['idItem', 'name', 'picture', 'description_text', 'category']
        })
            .then(items => {
                res.send(items);
            })
            .catch(err => {
                res.status(500).send({
                    error: 'An error has occured trying to fetch items.'
                });
            });
    }, 
    async fetchOneItem(req, res) {
        await Item.findOne({
            where: {idItem: req.params.idItem}
        })
            .then(item => {
                res.send(item);
            })
            .catch(err => {
                res.status(500).send({
                    error: 'An error has occured trying to fetch the item.'
                });
            });
    },
    async fetchTimetableItems(req, res) {
        await TimetableItem.findAll()
            .then(items => {
                res.send(items);
            })
            .catch(err => {
                res.status(500).send({
                    error: 'An error has occured trying to fetch timetable items.'
                });
            });
    } 
};