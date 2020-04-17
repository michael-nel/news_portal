module.exports = app => {

  app.get('/news', (req, res) => {
    const newsModel = app.src.models.newsModel;
    newsModel.getNews(response => {
      res.render('news/news', {
        news: response
      });
    })
  });
}