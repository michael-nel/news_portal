const app = require("./src/config/server");
const db = require("./src/config/db");
app.db = db;
//Up Server
app.listen(3000, () => {
  console.log("Server On ");
});
