function News(app) {
  this._app = app;
}

News.prototype.getNews = function (callback) {
  this._app
    .db("news")
    .then(callback)
    .catch((err) => res.status(500).send(err));
}

News.prototype.saveNews = function (value, callback) {
  this._app
    .db("news")
    .insert(value)
    .then(callback)
    .catch((err) => res.status(500).send(err));
}

module.exports = () => News