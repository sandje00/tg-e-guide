module.exports = (sequelize, DataTypes) => 
    sequelize.define('TimetableItem', {
        idtimetable_item: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        company: {
            type: DataTypes.STRING
        },
        destination: {
            type: DataTypes.STRING
        },
        departure: {
            type: DataTypes.STRING
        },
        arrival: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        }
    })

/* const Sequelize = require('sequelize');
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

module.exports = TimetableItem; */