const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class posts extends Model {}

posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
<<<<<<< HEAD
      PrimaryKey: true,
=======
      primaryKey: true,
>>>>>>> fa3ebcff20dc6aba046bd8f6a5a1675c843c9fea
      autoIncrement:true
    },
    Image: {
      type: DataTypes.STRING,
    },
    Bio: {
<<<<<<< HEAD
      type: DataType.STRING,
    },
=======
      type: DataTypes.STRING,
    },
    account_id:{
      type: DataTypes.INTEGER,
      reference:{
      model:"account",
      key:"id"
    } 
  }
>>>>>>> fa3ebcff20dc6aba046bd8f6a5a1675c843c9fea
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