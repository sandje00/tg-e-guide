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
        await User.create(req.body)
            .then(user => {
                const user_json = user.toJSON();
                res.send({
                    user: user_json,
                    token: jwtSignUser(user_json),
                }); 
            })
            .catch(err => {
                res.status(400).send({
                    error: `<b>This username is already in use.</b>`
                });
            });
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
                    error: `<b>There is no such user as ${username}.</b>`
                });
            }

            const is_pwd_valid = await user.pwdcmp(hpwd);
            if(!is_pwd_valid) {
                return res.status(403).send({
                    error: `<b>Your password is incorrect.</b>`
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
                error: `<b>An error has occured trying to sign in.</b>`
            });
        }
    }
};