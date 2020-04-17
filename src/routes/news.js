module.exports = app => {

  app.get('/news', (req, res) => {
    app.db('news')
      .then(response => {
        res.render('news/news', {
          news: response
        });
      })
      .catch(err => res.status(500).send(err));
  });
}