let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let db = [];

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use(express.static("images"));
app.use(express.static("css"));

app.get("/", (req, res) => {
    res.render("index.html");
});

app.get("/index.html", (req, res) => {
    res.render("index.html");
});

app.get("/newtask.html", (req, res) => {
    res.render("newtask.html");
});

app.get("/listtasks.html", (req, res) => {
    res.render("listtasks.html", { taskDB: db});
});

app.post("/newtask", (req, res) => {
    db.push(req.body);
    res.render("newtask.html", { taskDB: db});
});

app.listen(8080);