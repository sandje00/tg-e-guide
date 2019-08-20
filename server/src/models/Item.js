const Sequelize = require('sequelize');
const db = require('../config/database');

const Item = db.define('item', {
    idItem: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    picture: {
        type: Sequelize.STRING
    },
    description_text: {
        type: Sequelize.TEXT
    },
    view_more_link: {
        type: Sequelize.STRING
    },
    avg_grade: {
        type: Sequelize.DECIMAL(3, 2)
    },
    category: {
        type: Sequelize.STRING
    }
});

module.exports = Item;