const app = require('./src/config/server');
const consign = require('consign')
const db = require('./src/config/db')
app.db = db
//Routes
consign()
  .then('./src/routes')
  .then('./src/models')
  .into(app)

//Up Server
app.listen(3000, () => {
  console.log('Server On ')
});