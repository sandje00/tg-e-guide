module.exports = (sequelize, DataTypes) => {
    const UserTimetableItem = sequelize.define('UserTimetableItem', {});

    UserTimetableItem.associate = function (models) {
        UserTimetableItem.belongsTo(models.User);
        UserTimetableItem.belongsTo(models.TimetableItem);
    }

    return UserTimetableItem;
}