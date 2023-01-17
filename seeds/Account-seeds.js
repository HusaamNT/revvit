const Accounts = require("../models/Accounts");
const bcrypt = require("bcrypt");

let AccountData = [
{
    Username: "SpeedDemon",
    Password: "password123456",
    Email: "SpeedDemon@gmail.com"
},
{
    Username: "RaceReady",
    Password: "password123456",
    Email: "RaceReady@gmail.com"
},
{
    Username: "Turbocharged",
    Password: "password123456",
    Email: "Turbocharged@gmail.com"
}
];
const seedAccount = async () => {
    for (let i = 0; i < AccountData.length; i++) {
      const hashedPassword = await bcrypt.hash(AccountData[i].Password, 10);
      AccountData[i].Password = hashedPassword;
    }
    console.log(AccountData);
    Accounts.bulkCreate(AccountData);
  }
module.exports = seedAccount;