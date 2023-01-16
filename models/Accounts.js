const { Model, DataTypes } = require("sequelize");

const bcrypt = require("bcrypt");

const sequelize = require("../config/connection");

class Accounts extends Model {}

Accounts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Username: {
      type: DataTypes.STRING,
      validate: {
        is: /[a-zA-Z0-9]*/,
        len: [1, 30],
      },
    },
    Password: {
      type: DataTypes.STRING,
      validate: {
        is: /[a-zA-Z0-9]*/,
        len: [8],
      },
    },
    Email: {
      type: DataTypes.STRING,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.STRING,
    },
    Bio: {
      type: DataTypes.STRING,
    },
    
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: "accounts",
  }
);

module.exports = Accounts;
