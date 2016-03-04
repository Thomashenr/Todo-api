var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
	res.send('Hey Coop-A-Loop!!');
});

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT);
});