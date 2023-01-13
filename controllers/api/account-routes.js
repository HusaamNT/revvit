const router = require('express').Router();
const { Account, Post } = require('../../models');
const { v4: uuid } = require("uuid");

//get all accounts 
router.get('/', async (req, res) => {
  try {
    const accountData = await Account.findAll;
  res.status(200).json(accountData)
  } catch (err){
    res.status(500).json(err)
  }
});
//get account by id, but for the user should be through unique username


router.get('/:id', async (req, res) => {
 try{
  const accountData = await Account.findByPk(req.params.id);
  if (!accountData){
    res.status(404).json({ message: 'Account not found'});
  }
  res.status(200).json(accountData)
 }catch(err){
  res.status(500).json(err)
 }
});

router.get("/:id", (req,res) =>{
  Account.findOne({
    where: {
      Username: req.body.Username
    },
  })
  .then((accountData) =>{
    res.status(200).json(accountData)
  })
  .catch(err => {
    console.log(err)
    return res.status(400).json(err)
  })
})

//create new account
router.account('/', async (req, res) => {
  try{
    const accountData = await Account.create;
    res.status(200).json(accountData);
  }catch(err){
    res.status(400).json(err);
  }
});

//delete account of the current logged in account
router.delete('/:id', async (req, res) => {
  try{
    const accountData = await Account.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(accountData);
   }catch(err){
    res.status(500).json(err);
   }
});

module.exports = router;
