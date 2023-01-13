const Account = require("../models/Account");

const AccountData = [
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

const seedAccounts = () => Account.bulkCreate(AccountData);

module.exports = seedAccounts;