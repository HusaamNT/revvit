const router = require('express').Router();
const { Account, Post } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll;
  res.status(200).json(postData)
  } catch (err){
    res.status(500).json(err)
  }
});

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

router.post('/', async (req, res) => {
  try{
    const postData = await Post.create;
    res.status(200).json(postData);
  }catch(err){
    res.status(400).json(err);
  }
});


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
