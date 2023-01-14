const router = require("express").Router();
const { Accounts, Posts } = require("../../models");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");

//login
router.post("/login", async (req, res) => {
  try {
    const accountData = await Accounts.findOne({
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
    const accountData = await Accounts.findAll();
    console.log(accountData);
    res.status(200).json(accountData) 
  } catch (err) {
    res.status(500).json(err);
  }
});
//get account by id, but for the user should be through unique username
router.get("/:id", async (req, res) => {
  try {
    const accountData = await Accounts.findByPk(req.params.id);
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
    console.log('Router method called');
 const newUserData = {
  email: req.body.email,
  username: req.body.username,
  password: req.body.password
}
newAccountData.password = await bcrypt.hash(newAccountData.password, 10);
console.log(newUserData);
await Accounts.create(newUserData)
    console.log(newUserData);
    res.status(200).json(newUserData);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});
// const { email, username, password } = req.body
// const accountData = await Accounts.create({email, username, password});
// console.log(accountData);

// const accountData = {
//   email: req.body.email,
//   username: req.body.username,
//   password: req.body.password
// }

// await Accounts.create(accountData)

// const newAccountData = req.body;
// const account = await Accounts.create(newAccountData);

//delete account of the current logged in account
router.delete("/:id", async (req, res) => {
  try {
    const accountData = await Accounts.destroy({
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
