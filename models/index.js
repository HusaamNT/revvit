const Accounts = require('./Accounts');
const HashTags = require('./Hashtags');
const PostTags = require('./PostTags')
const Posts = require('./Posts');

//accounts can post as much as they want
Accounts.hasMany(Posts, {
    foreignKey: 'account_id'
})

//posts will be linked to 1 account
Posts.belongsTo(Accounts, {
    foreignKey: 'account_id'
})

//many hashtags can go onto many posts
HashTags.belongsToMany(Posts, {
    through: 'post_tag',
})

//many posts can have many hashtags
Posts.belongsToMany(HashTags, {
    through: 'post_tag',

})
//the through model will be the post tag model

module.exports = {
    Accounts,
    Posts,
    HashTags,
    PostTags,
  };
  