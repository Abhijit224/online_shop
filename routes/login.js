const express = require('express');
const path = require('path');
var router = express.Router();


router.get("/login", function(req, res) {
    res.render("login")
});


module.exports = router;