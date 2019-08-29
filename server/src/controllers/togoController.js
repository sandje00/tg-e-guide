const {UserItem} = require('../models');
const {UserTimetableItem} = require('../models');

module.exports = {
    async addItem(req, res) {
        try {
            const username = req.body.UserUsername;
            const idItem = req.body.ItemIdItem;
            const Togo = await UserItem.findOne({
                where: {
                    UserUsername: username,
                    ItemIdItem: idItem
                }
            });

            if(Togo) {
                return res.status(400).send({
                    error: `<b>You have already added this item to your TO GO list.</b>`
                });
            }

            const newTogo = await UserItem.create({
                UserUsername: username,
                ItemIdItem: idItem
            });
            res.send(newTogo.toJSON());
        }
        catch(err) {
            res.status(500).send({
                error: 'An error has occured trying add item to your TO GO list.'
            });
        }
    },
    async addTimetableItem(req, res) {
        try {
            const username = req.body.UserUsername;
            const idtimetable_item = req.body.TimetableItemIdtimetableItem;
            const Togo = await UserTimetableItem.findOne({
                where: {
                    UserUsername: username,
                    TimetableItemIdtimetableItem: idtimetable_item
                }
            });

            if(Togo) {
                return res.status(400).send({
                    error: `<b>You have already added this item to your TO GO list.</b>`
                });
            }

            const newTogo = await UserTimetableItem.create({
                UserUsername: username,
                TimetableItemIdtimetableItem: idtimetable_item
            });
            res.send(newTogo.toJSON());
        }
        catch(err) {
            res.status(500).send({
                error: 'An error has occured trying add item to your TO GO list.'
            });
        }
    },
    async showItems(req, res) {
        try {
            const items = await UserItem.findAll({
                where: {
                    UserUsername: req.body.UserUsername
                }
            });
            res.send(items);
        }
        catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch items.'
            });
        }
    },
    async showTimetableItems(req, res) {
        try {
            const items = await UserTimetableItem.findAll({
                where: {
                    UserUsername: req.body.UserUsername
                }
            });
            res.send(items);
        }
        catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch items.'
            });
        }
    }
};