const authController = require('./controllers/authController');
const itemsController = require('./controllers/itemsController');
const togoController = require('./controllers/togoController');
const ratingsController = require('./controllers/ratingsController');

const validation = require('./authentication/validation');
const is_authenticated = require('./authentication/is_authenticated');

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

    app.post('/additem/:idItem',
        is_authenticated,
        togoController.addItem);
    app.post('/addtimetableitem/:idItem',
        is_authenticated,
        togoController.addTimetableItem);
    app.get('/showitems',
        is_authenticated,
        togoController.showItems);
    app.get('/showtimetableitems',
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
};