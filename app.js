var app = require('./src/config/server');

//Routes
require('./src/routes/news')(app);
require('./src/routes/home')(app);
require('./src/routes/form_add')(app);

//Up Server
app.listen(3000, () => {
  console.log('Server On ')
});