const express = require('express')
const path = require('path');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

let url = path.join(__dirname, "../semantic-ui/examples/");
console.log(url);
app.use('/', express.static('../public'));

app.listen(3000, function () {
  console.log('server/app listening on port 3000');
})