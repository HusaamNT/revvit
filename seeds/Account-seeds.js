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
      AccountData[i].Password = await bcrypt.hash('password', 10);
    }
  
    console.log(AccountData);
    Accounts.bulkCreate(AccountData);
  }
module.exports = seedAccount;