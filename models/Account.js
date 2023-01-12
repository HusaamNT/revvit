const { Model, DataTypes } = require("sequelize");

const bcrypt = require("bcrypt");

const sequelize = require("../config/connection");

class accounts extends Model {}

accounts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      PrimaryKey: true,
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
      type: DataType.STRING,
      validate: {
        is: /[a-zA-Z0-9]*/,
        len: [8],
      },
    },
    Email: {
      type: DataTypes.STRING,
    },
    Name: {
      type: DataType.STRING,
    },
    Image: {
      type: DataType.STRING,
    },
    Bio: {
      type: DataType.STRING,
    },
    
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.Password = await bcrypt.hash(newUserData.Password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        if (updatedUserData.Password) {
          updatedUserData.Password = await bcrypt.hash(updatedUserData.Password, 10);
        }
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: "accounts",
  }
);

module.exports = accounts;
