module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        idItem: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        picture: {
            type: DataTypes.STRING
        },
        description_text: {
            type: DataTypes.TEXT
        },
        view_more_link: {
            type: DataTypes.STRING
        },
        avg_grade: {
            type: DataTypes.DECIMAL(3, 2)
        },
        category: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false
    })

    Item.associate = function (models) {

    }

    return Item;
}