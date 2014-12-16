var newData = require('./services/NewData');
var spawn = require('child_process').spawn;
var express = require('express');
var _ = require('lodash');
var app = express();

var bodyParser = require('body-parser');
app.use(express.static(__dirname));

app.use(bodyParser.json());



app.post('/runCtSegmentation', function(req, res) {
		//console.log(req.body.ct.files[0].uri);
		// var ct = req.body.ct;
		//var fiducials = req.param("fiducials");
		//var irodsConf = req.param("irodsConf");
		if(_.isEmpty(req.body)){
		return res.status(400).send('Bad Request');
		}
		else if(req.body.ct&&req.body.fiducialsList&&req.body.irodsConf){
		var ctFilePath = req.body.ct.files[0].uri;
		var fiducialsFilePath = req.body.fiducialsList.files[0].uri;
		var irodsRestURL = req.body.irodsConf.irodsRest.hostname + ":" + req.body.irodsConf.irodsRest.port + req.body.irodsConf.irodsRest.path;
		console.log(ctFilePath);
		console.log(fiducialsFilePath);
		console.log(irodsRestURL);
		console.log(req.body.irodsConf.username);
		console.log(req.body.irodsConf.password);
		var command = spawn('sh',['test_bash.sh',ctFilePath,fiducialsFilePath,irodsRestURL,req.body.irodsConf.username,req.body.irodsConf.password]);
		//res.sendStatus();
		var output = [];
		command.stdout.on('data', function(chunk) {
			output.push(chunk);
			});

		command.on('close', function(code,signal) {
				console.log('close with code:',code);
				console.log(newData);
				});
		res.status(200).send('OK');

		}
		else{



			return res.status(400).send('Bad Request');
		}



});

app.listen(3000);
