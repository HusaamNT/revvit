const PostTags = require("../models/PostTags");

const postTagsData = [
{
    post_tag:1,
    hashtag_ID:2
},
{
    post_tag:1,
    hashtag_ID:5
},
{
    post_tag:1,
    hashtag_ID:8
},
{
    post_tag:2,
    hashtag_ID:1
},
{
    post_tag:2,
    hashtag_ID:6
},
{
    post_tag:2,
    hashtag_ID:9
},
{
    post_tag:3,
    hashtag_ID:2
},
{
    post_tag:3,
    hashtag_ID:6
},
{
    post_tag:4,
    hashtag_ID:23
},
{
    post_tag:4,
    hashtag_ID:7
},
{
    post_tag:5,
    hashtag_ID:3
},
{
    post_tag:5,
    hashtag_ID:9
},
{
    post_tag:6,
    hashtag_ID:4
},
];

const seedPostTags = () => PostTags.bulkCreate(postTagsData);

module.exports = seedPostTags;