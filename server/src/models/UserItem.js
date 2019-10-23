module.exports = (sequelize, DataTypes) => {
    const UserItem = sequelize.define('UserItem', {
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

    UserItem.associate = function (models) {
        UserItem.belongsTo(models.User, { foreignKey: 'idUser' });
        UserItem.belongsTo(models.Item, { foreignKey: 'idItem' });
    }

    return UserItem;
}