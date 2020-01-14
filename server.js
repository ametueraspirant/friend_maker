const express = require("express");

const app = express();
var port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app'));

require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);

app.listen(port, function() {
  console.log("App listening on port: " + port);
});