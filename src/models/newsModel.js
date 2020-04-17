module.exports = (app) => {
  const getNews = (callback) => {
    app
      .db("news")
      .then(callback)
      .catch((err) => res.status(500).send(err));
  };

  const saveNews = (value, callback) => {
    app
      .db("news")
      .insert(value)
      .then(callback)
      .catch((err) => res.status(500).send(err));
  };
  return { getNews, saveNews };
};
