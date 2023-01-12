const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class posts extends Model {}

posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      PrimaryKey: true,
      autoIncrement:true
    },
    Image: {
      type: DataTypes.STRING,
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
    modelName: "posts",
  }
);

module.exports = posts;