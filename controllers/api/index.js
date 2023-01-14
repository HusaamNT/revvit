const router = require('express').Router();

//both accountRoutes & postRoutes with a file path of "./account-routes" changed postRoutes to "./post-routes"
const accountRoutes = require('./account-routes');
const postRoutes = require('./post-routes');
/////////////////////////


//nothing inside hashtag-routes
const hashtagRoutes = require('./hashtag-routes');

router.use('/account', accountRoutes);
router.use('/post', postRoutes);

//nothing inside hashtag-routes
router.use('/hashtag', hashtagRoutes);

module.exports = router;
