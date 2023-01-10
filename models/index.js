const Account = require('./Account');
const Hashtag = require('./Hashtag');
const Post = require('./Post');
const PostTag = require('./PostTag');

//accounts can post as much as they want
Account.hasMany(Post, {
    foreignKey: 'account_id'
})

//posts will be linked to 1 account
Post.belongsTo(Account, {
    foreignKey: 'account_id'
})

//many hashtags can go onto many posts
Hashtag.belongsToMany(Post, {
    through: 'post_tag',
})

//many posts can have many hashtags
Post.belongsToMany(hashtag, {
    through: 'post_tag',

})
//the through model will be the posttag model

module.exports = {
    Account,
    Post,
    Hashtag,
    PostTag,
  };
  