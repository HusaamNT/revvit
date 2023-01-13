const router = require('express').Router();

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
        
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in 
        })
    }catch(err){
        res.status(500).json(err);
    }
});