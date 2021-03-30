const model = require("../models/quote");

module.exports = {
  fetch: function (req, res) {
    model
      .find()
      .sort({ date: -1 })
      .then((quote) => {
        res.render("index.ejs", { data: quote });
      })
      .catch((err) => {
        console.err(err);
      });
  },
  create: function (req, res) {
    const quote = req.body.quote;
    const author = req.body.author;
    const newQuote = new model({ quote, author });
    newQuote
      .save()
      .then((response) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.err(err);
      });
  },

  delete: function (req, res) {
    model
      .findByIdAndDelete(req.params.id)
      .then((response) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.err(err);
      });
  },
  renderForm: function (req, res) {
    res.render("form.ejs");
  },
};
