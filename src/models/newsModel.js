module.exports = app => {

  const getNews = (callback) => {
    app.db('news')
      .then(callback)
      .catch(err => res.status(500).send(err))
  }

  return {
    getNews
  };
}