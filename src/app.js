const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();
const port = 5555;

app.use(express.urlencoded({
    extended: true
}));

const view_path = path.join(__dirname, "views");
const css_path = path.join(__dirname, "public");


app.set("views", view_path);
app.use(express.static(css_path));

app.set("view engine", "ejs");
require("./db/conn");


const employee_router = require("./routers/employee");

app.use(employee_router);


app.listen(port ,() => {
    console.log(`Server run on Port no ${port}`)
})
