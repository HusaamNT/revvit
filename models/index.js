const Account = require('./Account');
const Hashtag = require('./Hashtag');
const Post = require('./Post');
const PostTag = require('./PostTag');

Account.hasMany(Post, {
    foreignKey: 'account_id'
})

Post.belongsTo(Account, {
    foreignKey: 'account_id'
})

Hashtag.belongsToMany(Post, {
    through: 'post_tag',
})

Post.belongsToMany(hashtag, {
    through: 'post_tag',

})

module.exports = {
    Account,
    Post,
    Hashtag,
    PostTag,
  };
  