const router = require("express").Router();
const { Accounts, Posts } = require("../../models");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");

//login
router.post("/login", async (req, res) => {
  try {
    const accountData = await Accounts.findOne({
      where: { Username: req.body.Username },
    });
    console.log(req.body.Username)
    console.log(accountData.Username)
    console.log(req.body.Password)
    console.log(accountData.Password)
    if (!accountData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again error 1' });
      return;
    } else {

      bcrypt.compare(req.body.Password, accountData.Password, (err, isMatch) => {
        if (err) {
          res.status(500).json({ message: 'An error occurred, please try again' });
        }
        else if (!isMatch) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again error 2' });
        }
        else if (isMatch) {
          req.session.user_id = accountData.id;
          req.session.logged_in = true;
          console.log(req.session.logged_in);
          req.session.save(() => {
            res.json({ user: accountData, message: 'You are now logged in!' });
          });
        }
      })
    }
  }
  catch (err) {
    res.status(400).json(err);
    console.log("error 4")
  }
}
);

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
    const newAccountData = {
      Email: req.body.email,
      Username: req.body.username,
      Password: req.body.password
    }
    newAccountData.Password = await bcrypt.hash(newAccountData.Password, 10);
    await Accounts.create(newAccountData)
    req.session.username = req.body.username
    req.session.save(() => {
      res.status(200).json(newAccountData);
    })
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});
// const { Email, Username, Password } = req.body
// const accountData = await Accounts.create({Email, Username, Password});
// console.log(accountData);

// const accountData = {
//   Email: req.body.Email,
//   Username: req.body.Username,
//   Password: req.body.Password
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
    if (req.session.logged_in) { }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
