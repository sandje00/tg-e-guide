const jwt = require('jsonwebtoken');

const config = require('../config');
const {User} = require('../models');

const ERROR = {
    already_exists: `<b>This username is already in use.</b>`,
    user_not_found: `<b>Incorrect username: no such user found.</b>`,
    invalid_pwd: `<b>Your password is incorrect.</b>`,
    server_error: `<b>An error has occured trying to sign in.</b>`
}

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
                return res.status(201).send({
                    user: user_json,
                    token: jwtSignUser(user_json),
                }); 
            })
            .catch(err => {
                return res.status(409).send({
                    error: ERROR.already_exists
                });
            });
    },
    async signin(req, res) {
        try {
            const {username, hpwd} = req.body;
            const user = await User.findOne({
                where: { username }
            });

            if(!user) {
                return res.status(401).send({
                    error: ERROR.user_not_found
                });
            }

            const is_pwd_valid = await user.pwdcmp(hpwd);
            if(!is_pwd_valid) {
                return res.status(401).send({
                    error: ERROR.invalid_pwd
                });
            }

            const user_json = user.toJSON();
            return res.status(200).send({
                user: user_json,
                token: jwtSignUser(user_json)
            });
        }
        catch(err) {
            return res.status(500).send({
                error: err.message
            });
        }
    }
};