const express = require('express');
const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin1234"
});
db.connect(function(error) {
    if (error) throw error;
    console.log("connected !")
});

module.exports = db;