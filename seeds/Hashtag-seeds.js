const HashTags = require("../models/Hashtags");

const hashtagData = [
  {
    Name: "Stage 1",
  },
  {
    Name: "Stage 2",
  },
  {
    Name: "Stage 3",
  },
  {
    Name: "Inline-4",
  },
  {
    Name: "V-6",
  },
  {
    Name: "V-8",
  },
  {
    Name: "V-10",
  },
  {
    Name: "V-12",
  },
  {
    Name: "Turbocharged",
  },
  {
    Name: "Supercharged",
  },
  {
    Name: "Tuned",
  },
  {
    Name: "Slammed",
  },
];

const seedHashtag = () => HashTags.bulkCreate(hashtagData);

module.exports = seedHashtag;
