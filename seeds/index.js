const seedAccounts = require("./Account-seeds");
const seedHashtag = require("./Hashtag-seeds");
const seedPost = require("./Post-seeds");
const seedPostTags = require("./PostTags-seeds");

const sequelize = require('../config/connection');

const seedAll = async () => {

  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedAccounts();
  console.log('\n----- ACCOUNTS SEEDED -----\n');

  await seedHashtag();
  console.log('\n----- HASHTAG SEEDED -----\n');

  await seedPost();
  console.log('\n----- POST SEEDED -----\n');

  await seedPostTags();
  console.log('\n----- POST TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
