const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World, This is Udo David');
});

router.use('/users', require('./users'));

module.exports = router;