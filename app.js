var spawn = require('child_process').spawn;
var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.post('/runCtSegmentation', function(req, res) {

    var ct = req.param("ct");
    var fiducials = req.param("fiducials");
    var irodsConf = req.param("irodsConf");
    
    var ctFilePath = ct.files[0].uri;
    var fiducialsFilePath = fiducials.files[0].uri;
    var irodsRestURL = irodsConf.irodsRest.hostname + ":" + irodsConf.irodsRest.port + irodsConf.irodsRest.path;

    var command = spawn(__dirname + '/test_bash.sh', [ctFilePath, fiducialsFilePath, irodsRestURL, irodsConf.username, irodsConf.password]);
    res.sendStatus();
    var output = [];

    command.stdout.on('data', function(chunk) {
        output.push(chunk);
    });

    command.on('close', function(resp) {
        console.log(resp);
       // res.json({uri: resp});
    });
    
});

app.listen(3000);
