const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class HashTags extends Model {}

HashTags.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    Name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30],
        is: /[a-zA-Z0-9]*/,
      },
      unique: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "HashTags",
  }
);

module.exports = HashTags;
