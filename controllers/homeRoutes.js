const router = require('express').Router();
const { Account, Post } = require('../models');

router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../views/index.handlebars'))
        // const postData = await Post.findAll({
        //     include: [
        //         {
        //         model: account,
        //         attributes: ['username'],
        //         },
        //     ],
        // })
        // const posts = postData.map((posts) => posts.get({ plain: true }));
        
        // res.render('index', {
        //     posts,
        //     logged_in: req.session.logged_in 
        // })
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;