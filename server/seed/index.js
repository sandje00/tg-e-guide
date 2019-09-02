const Promise = require('bluebird');

const {
    sequelize,
    User,
    Item,
    TimetableItem,
    UserItem,
    UserTimetableItem,
    Rating
} = require('../src/models');
const users = require('./users.json');
const items = require('./items.json');
const timetableitems = require('./timetableitems.json');
const useritems = require('./useritems.json');
const usertimetableitems = require('./usertimetableitems.json');
const ratings = require('./ratings.json');

sequelize.sync({force: true})
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

        await Promise.all(
            useritems.map(useritem => {
                UserItem.create(useritem);
            })
        );

        await Promise.all(
            usertimetableitems.map(usertimetableitem => {
                UserTimetableItem.create(usertimetableitem);
            })
        );

        await Promise.all(
            ratings.map(rating => {
                Rating.create(rating);
            })
        );
  });