var express = require('express')
var app = express()

app.use(express.static('.'));

app.get('/api', function (req, res) {
  res.json({api:'undefined'});
})

app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`);
})