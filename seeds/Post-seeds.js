const Post = require("../models/Post");

const postsData = [
{
    Image: "",
    Bio: "Welcome to my car page!",
    account_id:1
},
{
    Image: "",
    Bio: "Introducing the ultimate driving machine, now available in our fleet.",
    account_id:1
},
{
    Image: "",
    Bio: "Experience luxury and performance with our new car arrival.",
    account_id:1
},
{
    Image: "",
    Bio: "Get behind the wheel of our latest acquisition, a true driving delight.",
    account_id:2
},
{
    Image: "",
    Bio: "Our newest car is engineered for speed and style.",
    account_id:2
},
{
    Image: "",
    Bio: "Discover the epitome of automotive excellence in our new car.",
    account_id:2
},
{
    Image: "",
    Bio: "The future of driving is here with our latest fleet addition.",
    account_id:3
},
{
    Image: "",
    Bio: "Elevate your driving experience with our newest addition to the fleet.",
    account_id:3
}
];

const seedPost = () => Post.bulkCreate(postsData);

module.exports = seedPost;