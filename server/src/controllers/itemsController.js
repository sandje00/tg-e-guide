const {Item} = require('../models');
const {TimetableItem} = require('../models');

module.exports = {
    async fetchItems(req, res) {
        try {
            const items = await Item.findAll({
                attributes: ['idItem', 'name', 'picture', 'description_text', 'avg_grade', 'category']
            });
            res.send(items);
        }
        catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch items.'
            });
        }
    },
    async fetchOneItem(req, res) {
        try {
            const item = await Item.findOne({
                where: {idItem: req.params.idItem}
            });
            res.send(item);
        }
        catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the item.'
            });
        }
    },
    async fetchTimetableItems(req, res) {
        try {
            const items = await TimetableItem.findAll();
            res.send(items);
        }
        catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch timetable items.'
            });
        }
    }
};