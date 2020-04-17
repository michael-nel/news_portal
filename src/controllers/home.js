module.exports.index = function (app, req, res) {
  const newsModel = new app.src.models.newsModel(app);
  newsModel.getLastest(response => {
    res.render("home/index", {
      news: response,
    });
  });
}