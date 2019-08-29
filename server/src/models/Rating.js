module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define('Rating', {
        idRating: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        grade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comment_text: {
            type: DataTypes.TEXT
        }
    });

    Rating.associate = function (models) {
        Rating.belongsTo(models.User);
        Rating.belongsTo(models.Item);
    }

    return Rating;
}