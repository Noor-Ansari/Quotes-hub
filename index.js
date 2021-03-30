const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controllers/controllers");
const methodOverride = require("method-override");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.get("/", controller.fetch);
app.get("/new", controller.renderForm);
app.post("/add_the_quote", controller.create);
app.delete("/:id", controller.delete);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
