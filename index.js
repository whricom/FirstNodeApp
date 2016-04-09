var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var app = express();


app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: "library" }));
require("./src/config/passport")(app);

app.set("views", "./views");

// handlebars
//var handlebars = require("express-handlebars");
//app.engine(".hbs", handlebars({ extname: ".hbs" }));
//app.set("view engine", ".hbs");

// ejs
app.set("view engine", "ejs");

// Routes
var booksRouter = require("./src/routes/books");
app.use("/Books", booksRouter);
var authRouter = require("./src/routes/auth");
app.use("/Auth", authRouter);

// stand alone http gets
app.get("/", function (req, res) {
    res.render("index",
        {
            title: "Hello from renderer",
            nav: [
                { link: "/Books", text: "Books" }, { link: "/Authors", text: "Authors" }
            ]
        });
    //res.send("hello there!");
});
app.get("/hero", function (req, res) {
    res.send("My Hero!");
});

// app now listening to port 4500 (website is up and running)
app.listen(4500, function (err) {
    console.log("here");
});