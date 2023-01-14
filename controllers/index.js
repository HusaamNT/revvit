const router = require('express').Router();
const apiRoutes = require('./api');
console.log(5)
router.use('/api', apiRoutes);

router.use((req,res) => {
    res.send('sdadasd')
})

module.exports = router