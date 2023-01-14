const router = require('express').Router();
const Post = {Post} = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                model: account,
                attributes: ['username'],
                },
            ],
        })
        const posts = postData.map((posts) => posts.get({ plain: true }));
        
        res.render('index', {
            posts,
            logged_in: req.session.logged_in 
        })
    }catch(err){
        res.status(500).json(err);
    }
});