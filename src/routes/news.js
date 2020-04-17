module.exports = (app) => {

  app.get("/news", (req, res) => {
    app.src.controllers.news.index(app, req, res);
  });

  app.get("/news/add", (req, res) => {
    app.src.controllers.news.form_add(app, req, res);
  });

  app.post("/news/add", (req, res) => {
    app.src.controllers.news.store(app, req, res);
  });
};