module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define('Rating', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        grade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'grade'
        },
        comment_text: {
            type: DataTypes.TEXT,
            field: 'comment_text'
        },
        idUser: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'idUser'
        },
        idItem: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'idItem'
        }
    });

    Rating.associate = function (models) {
        Rating.belongsTo(models.User, { foreignKey: 'idUser' });
        Rating.belongsTo(models.Item, { foreignKey: 'idItem' });
    }

    return Rating;
}