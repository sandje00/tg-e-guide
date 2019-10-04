const {Item} = require('../models');
const {TimetableItem} = require('../models');

module.exports = {
    async fetchItems(req, res) {
        await Item.findAll({
            attributes: ['id', 'name', 'picture', 'description_text', 'category']
        })
            .then(items => {
                return res.status(200).send(items);
            })
            .catch(err => {
                return res.status(500).send({
                    error: err.message
                });
            });
    }, 
    async fetchOneItem(req, res) {
        await Item.findOne({
            where: {id: req.params.idItem}
        })
            .then(item => {
                if(!item) {
                   return res.status(404).send({
                       error: 'Item not found!'
                   });
                }
                return res.status(200).send(item);
            })
            .catch(err => {
                return res.status(500).send({
                    error: err.message
                });
            });
    },
    async fetchTimetableItems(req, res) {
        await TimetableItem.findAll()
            .then(items => {
                return res.status(200).send(items);
            })
            .catch(err => {
                return res.status(500).send({
                    error: err.message
                });
            });
    } 
};