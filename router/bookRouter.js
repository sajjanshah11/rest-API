const express = require('express');
const router = express.Router();

const saveBookName = require('../controller/bookController');

router.post('/book',saveBookName)

module.exports = router;