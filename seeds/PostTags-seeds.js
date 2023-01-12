const postTags = require("../models/PostTag");

const postTagsData = [{

}];

const seedPostTags = () => postTags.bulkCreate(postTagsData);

module.exports = seedPostTags;