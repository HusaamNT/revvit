const router = require('express').Router();
const accountRoutes = require('./post-routes');
const postRoutes = require('./post-routes');
const hashtagRoutes = require('./hashtag-routes');

router.use('/account', accountRoutes);
router.use('/post', postRoutes);
router.use('/hashtag', hashtagRoutes);

module.exports = router;
