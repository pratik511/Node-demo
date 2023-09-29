const app = require("express")();


app.get("/", (req, res) => res.send("Welcome to Design Creation APIs!"));


app.use("/product", require("./product.route"));
app.use("/todo", require("./router"));

module.exports = app;