const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class posts extends Model {}

posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    Image: {
      type: DataTypes.STRING,
    },
    Bio: {
      type: DataTypes.STRING,
    },
    account_id:{
      type: DataTypes.INTEGER,
      reference:{
      model:"account",
      key:"id"
    } 
  }
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