const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class PostTags extends Model {}

PostTags.init(
  {
    post_tag: {
      type: DataTypes.INTEGER,
        reference:{
            module: "posts",
            key: "id"
        },
    },
    hashtag_ID: {
      type: DataTypes.INTEGER,
        reference:{
            model: "hashTags",
            key: "id"
        },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: "postTags",
  }
);

module.exports = PostTags;