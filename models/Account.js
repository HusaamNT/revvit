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
        len: [8]
      },
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
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: "accounts",
    instanceMethods: {
        generateHash(Password) {
            return bcrypt.hash(Password, bcrypt.genSaltSync(8));
        },
        validPassword(Password) {
            return bcrypt.compare(Password, this.Password);
        }
    }
  }
);

module.exports = accounts;