const router = require('express').Router();
const accountRoutes = require('./post-routes');
const postRoutes = require('./post-routes');


router.use('/account', accountRoutes);
router.use('/post', postRoutes);
router.use('/hashtag', hashtagRoutes);

module.exports = router;
