var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.json({api:'undefined'});
})

app.listen(3000, () => {
  console.log(`API Server listening at http://localhost:3000`);
})