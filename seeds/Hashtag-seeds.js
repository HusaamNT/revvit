const hashTags = require("../models/Hashtag");


const hashtagData =  [{
    Name: "exampleName"
},
{
    Name: "exampleName2"
}];

const seedHashtag = () => hashTags.bulkCreate(hashtagData);

module.exports = seedHashtag;