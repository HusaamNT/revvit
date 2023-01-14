const router = require("express").Router();
const { Account, Post } = require("../../models");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");

//login
router.post("/login", async (req, res) => {
  try {
    const accountData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!accountData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    bcrypt.compare(req.body.password, accountData.password, (err, isMatch) => {
      if (!isMatch){
      res
      .status(400)
      .json({ message: 'Incorrect username or password, please try again' })
      }
    else if(isMatch){
    req.session.save(() => {
      req.session.user_id = accountData.id;
      req.session.logged_in = true;
      console.log(req.session.logged_in)
      res.json({ user: accountData, message: 'You are now logged in!' }); 
    });
  }else{
  res.status(400).json(err)
  }
})
} catch (err) {
    res.status(400).json(err);
  }
});

//get all accounts
router.get("/", async (req, res) => {
  try {
    const accountData = await Account.findAll({include: [
      {
        model: Account,
        attributes: ['username', 'email'],
      }
    ]
  })
    console.log(accountData);
    res.status(200).render('all', accountData) 
  } catch (err) {
    res.status(500).json(err);
  }
});
//get account by id, but for the user should be through unique username
router.get("/:id", async (req, res) => {
  try {
    const accountData = await Account.findByPk(req.params.id);
    if (!accountData) {
      res.status(404).json({ message: "Account not found" });
    }
    res.status(200).json(accountData);
    
  } catch (err) {
    res.status(500).json(err);
  }
});
//create new account
router.post("/", async (req, res) => {
  try {

    const accountData = await{
      email: req.body.email,
      username: req.body.username,
      password: req.body,password
    }
    await Account.create(accountData)
    res.status(200).json(accountData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete account of the current logged in account
router.delete("/:id", async (req, res) => {
  try {
    const accountData = await Account.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(accountData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//logout
router.get("/logout", async (req, res) => {
  try {
    if(req.session.logged_in){}
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
