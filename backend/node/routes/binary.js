const express = require('express');
const router = express.Router();
const { sendData } = require("../controllers/binary");

router.post("/", function (req, res) {
    res,send(sendData);
});

module.exports = router;
