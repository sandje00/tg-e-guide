const authController = require('./controllers/authController');
const validation = require('./authentication/validation');
const itemsController = require('./controllers/itemsController');

module.exports = (app) => {
    app.post('/signup', validation.signup, authController.signup);
    app.post('/signin', authController.signin);
    app.get('/items', itemsController.fetchItems);
    app.get('/viewitem/:idItem', itemsController.fetchOneItem);
    app.get('/timetableitems', itemsController.fetchTimetableItems);
};