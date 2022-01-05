const express = require('express');
const router = express.Router();

const getAllAuthor = require('../controller/getAuthorController');

router.get('/author/get-all',getAllAuthor);

module.exports = router;