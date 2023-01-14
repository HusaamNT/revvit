const router = require('express').Router();
const { Account, Post } = require('../../models');
const { v4: uuid } = require("uuid");

//get all accounts 
router.get("/", (req, res)=>{
  Account.findAll()
  .then(data => res.status(200).json(data))
  .catch(err => res.status(200).json(err))
})

//get by username
router.get("/:Username", (req,res) =>{
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
router.post("/", (req,res) => {
  Account.create(req.body)
  .then((newBook) => res.json(newBook))
  .catch((err) => res.json(err));
})

//delete account of the current logged in account
router.delete("/:id", (req,res)=>{
  Account.destroy({
    where:{
      id:req.params.id,
    }
  })
  .then((newBook) => res.json(newBook))
  .catch((err) => res.json(err))

})


module.exports = router;
