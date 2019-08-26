module.exports = (sequelize, DataTypes) => 
    sequelize.define('TimetableItem', {
        idtimetable_item: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        company: {
            type: DataTypes.STRING
        },
        destination: {
            type: DataTypes.STRING
        },
        departure: {
            type: DataTypes.STRING
        },
        arrival: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false
    })