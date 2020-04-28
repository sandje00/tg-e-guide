const {UserItem} = require('../models');
const {UserTimetableItem} = require('../models');
const {Item} = require('../models');
const {TimetableItem} = require('../models');

const MESSAGE = {
    success: 'The item has been added to your TO GO list successfully.',
    already_added: 'You have already added this item to your TO GO list.',
    not_found: 'Item not found!'
}

module.exports = {
    async addItem(req, res) {
        try {
            const idUser = req.user.username;
            const idItem = req.params.idItem;
            const where = { idUser, idItem };

            const Togo = await UserItem.findOne({ where });

            if(Togo) {
                return res.status(409).send({
                    error: MESSAGE.already_added
                });
            }
            
            await UserItem.create(where);
            return res.status(201).send({
                message: MESSAGE.success
            });
        }
        catch(err) {
            return res.status(500).send({
                error: err.message
            });
        }
    },
    async addTimetableItem(req, res) {
        try {
            const idUser = req.user.username;
            const idItem = req.params.idItem;
            const where = { idUser, idItem };

            const Togo = await UserTimetableItem.findOne({ where });

            if(Togo) {
                return res.status(409).send({
                    error: MESSAGE.already_added
                });
            }

            await UserTimetableItem.create(where);
            return res.status(201).send({
                message: MESSAGE.success
            });
        }
        catch(err) {
            return res.status(500).send({
                error: err.message
            });
        }
    },
    async showItems(req, res) {
        const idUser = req.user.username;

        await UserItem.findAll({
            where: { idUser },
            include: [{
                model: Item,
                attributes: ['name']
            }]
        })
            .then(useritems => {
                return res.status(200).send(useritems);
            })
            .catch(err => {
                return res.status(500).send({
                    error: err.message
                });
            });
    },
    async showTimetableItems(req, res) {
        const idUser = req.user.username;

        await UserTimetableItem.findAll({
            where: { idUser },
            include: [{
                model: TimetableItem,
                attributes: ['company', 'destination', 'departure', 'arrival', 'price']
            }]
        })
            .then(usertimetableitems => {
                return res.status(200).send(usertimetableitems);
            })
            .catch(err => {
                return res.status(500).send({
                    error: err.message
                });
            });
    },
    async deleteItem(req, res) {
        try {
            const idUser = req.user.username;
            const idItem = req.params.id;
            const where = { idUser, idItem }
            console.log(where)
            const useritem = await UserItem.findOne({ where });

            if(!useritem) {
                return res.status(404).send({
                    error: MESSAGE.not_found
                })
            }

            await useritem.destroy();
            return res.status(200).send(useritem);
        }
        catch(err) {
            return res.status(500).send({
                error: err.message
            });
        }
    },
    async deleteTimetableItem(req, res) {
        try {
            const idUser = req.user.username;
            const idItem = req.params.id;
            const where = { idUser, idItem }

            const usertimetableitem = await UserTimetableItem.findOne({ where });

            if(!usertimetableitem) {
                return res.status(404).send({
                    error: MESSAGE.not_found
                })
            }

            await usertimetableitem.destroy();
            return res.status(200).send(usertimetableitem);
            
        }
        catch(err) {
            return res.status(500).send({
                error: err.message
            });
        }
    } 
};