var express = require('express');
var path = require('path');
var app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index_eBanking.html"));
});

app.use(express.static('dist'));

app.listen(1234, function() {
  console.log('Listing at http://localhost:1234');
});