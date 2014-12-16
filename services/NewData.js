saveNewImplant = function{
var request = require('request');
var filePath = "/opt/projects/xpr-seeg/test.fcsv";
var fs = require('fs');
var file;
fs.readFile(filePath,function(error,data){
		if (error) {
		return console.log(error);
		}
		file = data.toString();
		var line = file.split('\n')[3].split("=")[1];
		var body = JSON.stringify({"type":{"name":"SEEG Implant",
			"id":4
			},
			"metadata":{"numpoints":{"value":[1000]}},
			"files":[]
			});
		request.post('http://10.186.10.159:1337/data',
			{body:body},
			function (error, response, body) {
			if (!error && response.statusCode == 200) {
			console.log(body)
			}
			console.log(error);
			});
		});
}

