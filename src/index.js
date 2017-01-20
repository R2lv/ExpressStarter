const http = require("http");
const express = require("express");

const session = require("express-session");
const bodyParser = require("body-parser");
const db = require("./database/MongoDB");

const router = require("./router");

db.connect("mongodb://localhost/app", function() {

    let app = express();

    app.set('trust proxy', 1);
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    }));

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    router(app);

    app.use(express.static(__dirname+"/public/"));

    app.listen(3000, function() {
        console.log("App started");
    });

}, function(err) {
    throw err;
});