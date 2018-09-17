//imports
require('dotenv').config();
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const flash = require("connect-flash");
const passport = require('./config/passportConfig');
const session = require('express-session');
const app = express();
//config
const port = 5000;
const db_name = "osblogger";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + db_name, { useNewUrlParser: true });//mongo stuff
//middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(flash());
    //passport stuff
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.alerts = req.flash();
    next();
});
app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    //server logging
app.use(require("morgan")("dev"));

//sending build
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
//routes
app.use("/auth", require("./routes/auth"));
app.use('/api/article', require('./routes/article'));
app.use('/api/user',passport.authenticate('jwt', {session: false}), require('./routes/user'));
app.get("/logout",(req,res) => {
    req.logout();
    req.flash("success", "Successfully logged out");
    res.redirect("/");
});
//setting port & starting server
const server = app.listen( process.env.PORT || port, () => {
    console.log("Server started on port", process.env.PORT || port);
});
module.exports = server;