module.exports = (sequelize, DataTypes) => {
    const UserTimetableItem = sequelize.define('UserTimetableItem', {
        idUser: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            field: 'idUser'
        },
        idItem: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            field: 'idItem'
        }
    },
    {
        timestamps: false
    });

    UserTimetableItem.associate = function (models) {
        UserTimetableItem.belongsTo(models.User, { foreignKey: 'idUser' });
        UserTimetableItem.belongsTo(models.TimetableItem, { foreignKey: 'idItem' });
    }

    return UserTimetableItem;
}