const jwt = require('jsonwebtoken');

const config = require('../config');
const {User} = require('../models');

function jwtSignUser(user) {
    const DAY = 60 * 60 * 24;
    return jwt.sign(user, config.auth.jwtSecret, {
        expiresIn: DAY
    });
}

module.exports = {
    async signup(req, res) {
        try {
            const user = await User.create(req.body);
            const user_json = user.toJSON();
            res.send({
                user: user_json,
                token: jwtSignUser(user_json),
                success: 'You have signed up successfully!'
            });
        }
        catch(err) {
            res.send(err);
        }
    },
    async signin(req, res) {
        try {
            const {username, hpwd} = req.body;
            const user = await User.findOne({
                where: {
                    username: username
                }
            });

            if(!user) {
                return res.status(403).send({
                    error: `There is no such user as ${username}.`
                });
            }

            const is_pwd_valid = await user.pwdcmp(hpwd);
            if(!is_pwd_valid) {
                return res.status(403).send({
                    error: 'Your password is incorrect.'
                });
            }

            const user_json = user.toJSON();
            res.send({
                user: user_json,
                token: jwtSignUser(user_json),
                success: 'You have signed in successfully!'
            });
        }
        catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to sign in.'
            });
        }
    }
};