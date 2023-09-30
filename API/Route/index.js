const app = require("express")();


app.get("/", (req, res) => res.send("Welcome to Demo APIs!"));


app.use("/product", require("./product.route"));
app.use("/user", require("./user.route"));
app.use("/todo", require("./router"));

module.exports = app;