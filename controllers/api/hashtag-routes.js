const router = require('express').Router();
router.use('/hashtag', hashtagRoutes);

//GET #Tags
router = router()
router.get('/search/:hashtag', async (req, res, next) => {
  try {
   const result = await request(
    req, `/posts/hashtag/${encodeURIComponent(req.params.hashtag)}`,
   );
   res.json(result.data);
  } catch (error) {
   if (error.code) {
    console.error(error);
    next(error);
   }
  }
 })

//Post #Tags 
router.post('/search/hashtag', async (res,)=> {
  res.send("Search hashtags")
  try{
    const postData = await Post.create;
    res.status(200).json(postData);
  }catch(err){
    res.status(400).json(err);
  }
});




module.exports = router;
