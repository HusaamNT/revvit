const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class posts extends Model {}


posts.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        PrimaryKey: true
    },
    Image: {
        type: DataTypes.STRING,
    }
})
