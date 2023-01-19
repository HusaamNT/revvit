const router = require('express').Router();
const { Account, Posts } = require('../models');

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/logout', (req, res) => {
    delete req.session.username
    req.session.save(() => {
        res.redirect('/')
    })
})

router.get('/', async (req, res) => {
    try {
        const postData = await Posts.findAll()
        const posts = postData.map((posts) => posts.get({ plain: true }));
        
        res.render('all', {
            posts,
            logged_in: req.session.logged_in 
        })
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;