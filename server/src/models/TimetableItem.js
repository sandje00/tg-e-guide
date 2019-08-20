const Sequelize = require('sequelize');
const db = require('../config/database');

const TimetableItem = db.define('timetable_item', {
    idtimetable_item: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    company: {
        type: Sequelize.STRING
    },
    destination: {
        type: Sequelize.STRING
    },
    departure: {
        type: Sequelize.STRING
    },
    arrival: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    }
});

module.exports = TimetableItem;