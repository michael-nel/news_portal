module.exports.form_add = function (app, req, res) {
  res.render("admin/form_add_new", {
    news: {}
  });
}

module.exports.index = function (app, req, res) {
  const newsModel = new app.src.models.newsModel(app);
  newsModel.getNews(response => {
    res.render("news/news", {
      news: response,
    });
  });
}

module.exports.store = function (app, req, res) {
  const newsModel = new app.src.models.newsModel(app);
  // Validations
  req.assert('title', 'Title required.').notEmpty();
  req.assert('resume', 'Resume required.').notEmpty();
  req.assert('resume', 'Resume between 10 and 100 caracteres').len(10, 100);
  req.assert('author', 'Author required.').notEmpty();
  req.assert('new', 'News required.').notEmpty();
  req.assert('date_news', 'Date News required').notEmpty();

  const error = req.validationErrors();
  if (error) {
    res.render("admin/form_add_new", {
      validation: error,
      news: req.body
    });
    return;
  }

  newsModel.saveNews(req.body, response => {
    res.redirect("/news");
  });
}