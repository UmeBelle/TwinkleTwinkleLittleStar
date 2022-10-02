const express = require('express');
const router = express.Router();
const { sendData } = require("../controllers/binary");

router.get("/", sendData);

module.exports = router;
