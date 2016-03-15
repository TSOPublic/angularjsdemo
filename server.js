var path = require('path');
var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function(req, res){
	res.sendFile('index.html', {
		root: path.join(__dirname)
	});
});

app.set('port', 2222);
app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
/* Load the router module */
app.use('/', router);

app.listen(app.get('port'), function() {
    console.log('serving from:', __dirname);
    console.log('listening on:', app.get('port'));
});

module.exports = app;