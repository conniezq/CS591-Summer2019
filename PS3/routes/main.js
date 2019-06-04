const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('PS3_b', { string: 'Hey now' });
});

router.post('/', function (req, res) {
    res.render('PS3_c', { name: req.body.string, length: req.body.string.length });
});

module.exports = router;