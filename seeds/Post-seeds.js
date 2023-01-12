const Post = require("../models/Post");


const postsData = [{
    Image: "Image string data",
},
{
    Image: "Image string data 2",
}
];

const seedPost = () => Post.bulkCreate(postsData);

module.exports = seedPost;