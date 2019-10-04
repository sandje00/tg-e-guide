module.exports = (sequelize, DataTypes) => {
    const TimetableItem = sequelize.define('TimetableItem', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        company: {
            type: DataTypes.STRING,
            field: 'company'
        },
        destination: {
            type: DataTypes.STRING,
            field: 'destination'
        },
        departure: {
            type: DataTypes.STRING,
            field: 'departure'
        },
        arrival: {
            type: DataTypes.STRING,
            field: 'arrival'
        },
        price: {
            type: DataTypes.STRING,
            field: 'price'
        },
        category: {
            type: DataTypes.STRING,
            field: 'category'
        }
    },
    {
        timestamps: false
    })

    TimetableItem.associate = function (models) {

    }

    return TimetableItem;
}