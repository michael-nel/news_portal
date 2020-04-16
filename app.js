var express = require('express')
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('./src/views/home/index');
});

app.get('/form_add', (req, res) => {
  res.render('./src/views/admin/form_add_new');
});

app.get('/news', (req, res) => {
  res.render('./src/views/news/news');
});


app.listen(3000, () => {
  console.log('Server On ')
});