module.exports = (app) => {
  app.get("/new", (req, res) => {
    app
      .db("news")
      .first()
      .then((response) => {
        res.render("news/new", {
          news: response,
        });
      })
      .catch((err) => res.status(500).send(err));
  });
};
