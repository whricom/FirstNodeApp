var express = require("express");
var passport = require("passport");

var authRouter = express.Router();
authRouter.route("/")
    .get(function (req, res) {
        res.render("auth/sign-in");
    });

authRouter.route("/profile")
    .all(function (req, res, next) {
        if (!req.user) {
            res.redirect("/auth");
        }
        next();
    })
    .get(function (req, res) {
        res.json(req.user);
    });

authRouter.route("/signup")
    .get(function (req, res) {
        res.render("auth/sign-up");
    })
    .post(function (req, res) {
        // you can save the user info in the database here
        req.login(req.body,
            function () {
                res.redirect("/auth/profile");
        });
    });

authRouter.route("/signin")
    .post(passport.authenticate("local", { failureRedirect: "/" }),
    function (req, res) {
        res.redirect("/auth/profile");
    });
    
module.exports = authRouter;    