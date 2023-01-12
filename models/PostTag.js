const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class postTags extends Model {}

postTags.init(
  {
    post_tag: {
        reference:{
            module: "posts",
            key: "id"
        },
    },
    hashtag_ID: {
        reference:{
            module: "hashTags",
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

module.exports = postTags;