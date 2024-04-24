const express = require("express");
const {generateShortURL, getRedirectURL} = require('../controller/urlController')

const router = express.Router();

router.post('/', generateShortURL);
router.get('/:id', getRedirectURL);



module.exports = router;