
var express = require("express");

var books = {
    list: [
        {
            title: "First",
            author: "First Author"
        },
        {
            title: "Second",
            author: "Second Author"
        },
        {
            title: "Third",
            author: "Third Author"
        }
    ]
};
var booksRouter = express.Router();
booksRouter.use(function (req, res, next) {
    if (!req.user) {
        res.redirect("/auth/")
    }
    next(); 
})
booksRouter.route("/")
    .get(function (req, res) {
        res.render("books/books", books);
    });
booksRouter.route("/:id")
    .get(function (req, res) {
        var id = req.params.id
        res.render("books/singlebook", books.list[id]);
    });

module.exports = booksRouter;