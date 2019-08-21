const {User} = require('../models');

module.exports = {
    async signup(req, res) {
        try {
            const user = await User.create(req.body);
            res.send(user.toJSON());
        }
        catch(err) {
            res.send(err);
        }
    }
};