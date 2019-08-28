module.exports = (sequelize, DataTypes) => {
    const UserItem = sequelize.define('UserItem', {});

    UserItem.associate = function (models) {
        UserItem.belongsTo(models.User);
        UserItem.belongsTo(models.Item);
    }

    return UserItem;
}