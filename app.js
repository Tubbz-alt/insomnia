var express = require('express');
var app = express();

app.use(express.static('css'));
app.use(express.static('public'));

app.set('view engine', 'ejs');



app.get('/', function (req, res) {
	res.render('index', {body: ''});

});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

