const Account = require("../models/Account");

const AccountData = [{
    Username: "user1",
    Password: "example123456",
    Email: "example@qwerty.com"
},
{
    Username: "user2",
    Password: "example654321",
    Email: "example@ytrewq.com"
}
];


const seedAccounts = () => Account.bulkCreate(AccountData);

module.exports = seedAccounts;