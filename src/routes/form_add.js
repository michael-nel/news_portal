module.exports = app => {
  app.get('/form_add', (req, res) => {
    res.render('admin/form_add_new');
  });
}