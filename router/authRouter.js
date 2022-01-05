const express = require('express');
const router = express.Router();

const saveAuthorName = require('../controller/authorController');

// router.post('/book',bookController);
router.post('/author',saveAuthorName);

module.exports = router;