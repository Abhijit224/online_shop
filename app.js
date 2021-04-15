const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const session = require('express-session');

const MongoDBStore = require('connect-mongodb-session')(session);


require('dotenv').config();
var connection = process.env.MONGODB_URI;
const app = express();
//Database connection
mongoose.connect(
    connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(console.log('database connected')).catch((error) => {
    if (error) console.log("Error in database Connection");
});

app.set("port", process.env.PORT || 4000);

app.use(express.static(__dirname + "/views/css"));
app.use(express.static(path.join(__dirname, 'public/')));
app.use(express.static(`${__dirname}./js`));

app.set("views", path.join(__dirname, "views/home"));
app.set("view engine", "ejs");

//Setting Routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/login'));




app.listen(app.get('port'), function() {
    console.log("Server is started on port." + app.get("port"));
});