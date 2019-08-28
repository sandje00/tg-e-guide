const Promise = require('bluebird');

const {
    sequelize,
    User,
    Item,
    TimetableItem
} = require('../src/models');
const users = require('./users.json');
const items = require('./items.json');
const timetableitems = require('./timetableitems.json');

sequelize.sync({force: false})
  .then(async function () {
        await Promise.all(
            users.map(user => {
                User.create(user);
            })
        );

        await Promise.all(
                items.map(item => {
                    Item.create(item);
                })
            );

        await Promise.all(
            timetableitems.map(timetableitem => {
                TimetableItem.create(timetableitem);
            })
        );
  });