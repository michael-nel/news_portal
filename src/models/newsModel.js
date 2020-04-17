function News(app) {
  this._app = app;
}

News.prototype.getNews = function (callback) {
  this._app
    .db("news")
    .then(callback)
    .catch((err) => res.status(500).send(err));
}

News.prototype.getNew = function (value, callback) {
  this._app
    .db("news")
    .where('id', value.id)
    .first()
    .then(callback)
    .catch((err) => res.status(500).send(err));
}

News.prototype.getLastest = function (callback) {
  this._app
    .db("news")
    .limit(5)
    .orderBy('id', 'desc')
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