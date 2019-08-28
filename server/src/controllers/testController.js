const {Item} = require('../models');
const {TimetableItem} = require('../models');
const {User} = require('../models');

module.exports = {
    async fetchAllItems(req, res) {
        try {
            const items = await Item.findAll();
            res.send(items);
        }
        catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch items.'
            });
        }
    },
    async fetchAllTimetableItems(req, res) {
        try {
            const items = await TimetableItem.findAll();
            res.send(items);
        }
        catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch timetable items.'
            });
        }
    },
    async fetchAllUsers(req, res) {
        try {
            const users = await User.findAll();
            res.send(users);
        }
        catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch timetable users.'
            });
        }
    }
};