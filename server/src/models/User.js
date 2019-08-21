module.exports = (sequelize, DataTypes) => 
    sequelize.define('User', {
        iduser: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING
        },
        hpwd: {
            type: DataTypes.STRING
        }
    })