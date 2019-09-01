const authController = require('./controllers/authController');
const itemsController = require('./controllers/itemsController');
const togoController = require('./controllers/togoController');
const ratingsController = require('./controllers/ratingsController');

const validation = require('./authentication/validation');
const is_authenticated = require('./authentication/is_authenticated');

const testController = require('./controllers/testController');

module.exports = (app) => {
    app.post('/signup',
        validation.signup,
        authController.signup);
    app.post('/signin', 
        authController.signin);

    app.get('/items',
        itemsController.fetchItems);
    app.get('/viewitem/:idItem',
        itemsController.fetchOneItem);
    app.get('/timetableitems',
        itemsController.fetchTimetableItems);

    app.post('/additem',
        is_authenticated,
        togoController.addItem);
    app.post('/addtimetableitem',
        is_authenticated,
        togoController.addTimetableItem);
    app.get('/showitems/:UserUsername',
        is_authenticated,
        togoController.showItems);
    app.get('/showtimetableitems/:UserUsername',
        is_authenticated,
        togoController.showTimetableItems);
    app.delete('/deleteitem/:id',
        is_authenticated,
        togoController.deleteItem);
    app.delete('/deletetimetableitem/:id',
        is_authenticated,
        togoController.deleteTimetableItem);

    app.get('/ratings/:idItem',
        ratingsController.fetchRatings);
    app.post('/rate',
        is_authenticated,
        ratingsController.addRating);

    app.get('/allitems', testController.fetchAllItems);
    app.get('/alltimetableitems', testController.fetchAllTimetableItems);
    app.get('/allusers', testController.fetchAllUsers);
};