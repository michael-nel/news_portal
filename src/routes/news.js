module.exports = (app) => {
  // Get All
  app.get("/news", (req, res) => {
    const newsModel = new app.src.models.newsModel(app);
    newsModel.getNews(response => {
      res.render("news/news", {
        news: response,
      });
    });
  });

  app.get("/news/add", (req, res) => {
    res.render("admin/form_add_new");
  });

  app.post("/news/add", (req, res) => {
    const newsModel = new app.src.models.newsModel(app.db);
    newsModel.saveNews(req.body, response => {
      res.redirect("/news");
    });
  });
};