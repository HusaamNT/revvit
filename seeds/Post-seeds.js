const Posts = require("../models/Posts");

const postsData = [
{
    Image: "car1.jpg",
    Bio: "Welcome to my car page!",
    account_id:1
},
{
    Image: "car2.jpg",
    Bio: "Introducing the ultimate driving machine, now available in our fleet.",
    account_id:1
},
{
    Image: "car3.jpg",
    Bio: "Experience luxury and performance with our new car arrival.",
    account_id:1
},
{
    Image: "car4.jpg",
    Bio: "Get behind the wheel of our latest acquisition, a true driving delight.",
    account_id:2
},
{
    Image: "car5.jpg",
    Bio: "Our newest car is engineered for speed and style.",
    account_id:2
},
{
    Image: "car6.jpg",
    Bio: "Discover the epitome of automotive excellence in our new car.",
    account_id:2
},
{
    Image: "car7.jpg",
    Bio: "The future of driving is here with our latest fleet addition.",
    account_id:3
},
{
    Image: "car8.jpg",
    Bio: "Elevate your driving experience with our newest addition to the fleet.",
    account_id:3
}
];

const seedPost = () => Posts.bulkCreate(postsData);

module.exports = seedPost;