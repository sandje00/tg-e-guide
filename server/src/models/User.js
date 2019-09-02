const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

function hashPassword(user, options) {
    const SALT_FACTOR = 10;

    if(!user.changed('hpwd')) {
        return;
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.hpwd, salt, null))
        .then(hash => {
            user.setDataValue('hpwd', hash)
        })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        hpwd: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        hooks: {
            beforeSave: hashPassword
        }
    });

    User.prototype.pwdcmp = function (hpwd) {
        return bcrypt.compareAsync(hpwd, this.hpwd);
    }

    User.associate = function (models) {

    }

    return User;
}