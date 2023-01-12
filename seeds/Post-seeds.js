const Post = require("../models/Post");

const postsData = [
{
    Image: "",
},
{
    Image: "",
},
{
    Image: "",
},
{
    Image: "",
},
{
    Image: "",
},
{
    Image: "",
},
{
    Image: "",
},
{
    Image: "",
},
{
    Image: "",
},
{
    Image: "",
}
];

const seedPost = () => Post.bulkCreate(postsData);

module.exports = seedPost;