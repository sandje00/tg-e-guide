module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        picture: {
            type: DataTypes.STRING,
            field: 'picture'
        },
        description_text: {
            type: DataTypes.TEXT,
            field: 'description_text'
        },
        view_more_link: {
            type: DataTypes.STRING,
            field: 'view_more_link'
        },
        category: {
            type: DataTypes.STRING,
            field: 'category'
        }
    },
    {
        timestamps: false
    })

    Item.associate = function (models) {

    }

    return Item;
}