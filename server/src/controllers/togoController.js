const {UserItem} = require('../models');
const {UserTimetableItem} = require('../models');
const {Item} = require('../models');
const {TimetableItem} = require('../models');

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
            const username = req.params.UserUsername;
            const useritems = await UserItem.findAll({
                where: {
                    UserUsername: username
                },
                include: [{
                    model: Item,
                    attributes: ['name']
                }]
            });

            res.send(useritems);
        }
        catch(err) {
            console.log(err);
            res.status(500).send({
                error: 'An error has occured trying to fetch items.'
            });
        }
    },
    async showTimetableItems(req, res) {
        try {
            const username = req.params.UserUsername;
            const usertimetableitems = await UserTimetableItem.findAll({
                where: {
                    UserUsername: username
                },
                include: [{
                    model: TimetableItem,
                    attributes: ['company', 'destination', 'departure', 'arrival', 'price']
                }]
            });

            res.send(usertimetableitems);
        }
        catch(err) {
            console.log(err);
            res.status(500).send({
                error: 'An error has occured trying to fetch items.'
            });
        }   
    },
    async deleteItem(req, res) {
        try {
            const useritemid = req.params.id;
            const useritem = await UserItem.findOne({
                where: {
                    id: useritemid
                }
            });

            if(!useritem) {
                return res.status(400).send({
                    error: 'There is no useritem with such id.'
                })
            }

            await useritem.destroy();
            res.send(useritem);
        }
        catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to delete item.'
            });
        }
    },
    async deleteTimetableItem(req, res) {
        try {
            const usertimetableitemid = req.params.id;
            const usertimetableitem = await UserTimetableItem.findOne({
                where: {
                    id: usertimetableitemid
                }
            });

            if(!usertimetableitem) {
                return res.status(400).send({
                    error: 'There is no usertimetableitem with such id.'
                })
            }

            await usertimetableitem.destroy();
            res.send(usertimetableitem);
            
        }
        catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to delete item.'
            });
        }
    }
};