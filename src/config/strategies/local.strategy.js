﻿var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy({
        usernameField: "username",
        passwordField: "password"
    },
    function (username, password, done) {
        var user = {
            username: username,
            password: password
        };
        done(null, user); 
    }));