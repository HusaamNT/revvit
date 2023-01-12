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
},
{
    Username: "DriftKing",
    Password: "password123456",
    Email: "DriftKing@gmail.com"
},
{
    Username: "Gearhead",
    Password: "password123456",
    Email: "Gearhead@gmail.com"
},
{
    Username: "StreetRacer",
    Password: "password123456",
    Email: "StreetRacer@gmail.com"
},
{
    Username: "HighOctane",
    Password: "password123456",
    Email: "HighOctane@gmail.com"
},
{
    Username: "NitroJunkie",
    Password: "password123456",
    Email: "NitroJunkie@gmail.com"
},
{
    Username: "TrackHound",
    Password: "password123456",
    Email: "TrackHound@gmail.com"
},
{
    Username: "TunerNation",
    Password: "password123456",
    Email: "TunerNation@gmail.com"
}
];


const seedAccounts = () => Account.bulkCreate(AccountData);

module.exports = seedAccounts;