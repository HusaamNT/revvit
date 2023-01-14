const router = require('express').Router();
const accountRoutes = require('./account-routes');
const postRoutes = require('./post-routes');
const hashtagRoutes = require('./hashtag-routes');

router.use('/accounts', accountRoutes);
router.use('/posts', postRoutes);
//router.use('/hashtag', hashtagRoutes);

module.exports = router;
