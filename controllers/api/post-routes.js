const router = require('express').Router();
const { Account, Post } = require('../../models');
//recieve all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll;
  res.status(200).json(postData)
  } catch (err){
    res.status(500).json(err)
  }
});

//Search all posts from a specified user (not search for a post by id)
router.get('/:id', async (req, res) => {
 try{
  const postData = await Post.findByPk(req.params.id);
  if (!postData){
    res.status(404).json({ message: 'Post not found'});
  }
  res.status(200).json(postData)
 }catch(err){
  res.status(500).json(err)
 }
});
//create new post
router.post('/', async (req, res) => {
  try{
    const postData = await Post.create;
    res.status(200).json(postData);
  }catch(err){
    res.status(400).json(err);
  }
});

//Need to create verification for the account deleting the post is the account that created it
router.delete('/:id', async (req, res) => {
  try{
    const postData = await Post.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(postData);
   }catch(err){
    res.status(500).json(err);
   }
});

module.exports = router;
