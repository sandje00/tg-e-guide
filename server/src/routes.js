const authController = require('./controllers/authController');
const validation = require('./authentication/validation');
const itemsController = require('./controllers/itemsController');

const testController = require('./controllers/testController');

module.exports = (app) => {
    app.post('/signup', validation.signup, authController.signup);
    app.post('/signin', authController.signin);
    app.get('/items', itemsController.fetchItems);
    app.get('/viewitem/:idItem', itemsController.fetchOneItem);
    app.get('/timetableitems', itemsController.fetchTimetableItems);

    app.get('/allitems', testController.fetchAllItems);
    app.get('/alltimetableitems', testController.fetchAllTimetableItems);
    app.get('/allusers', testController.fetchAllUsers);
};