var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
	console.log('request starting...');
	console.log(request.url);

	// Match the request parameters
	var regex = /\?(.*)/;
	var isparameterpresent = regex.exec(request.url);
	if (isparameterpresent) {
		// Split the request URL into pairs of parameters
		var pairs = RegExp.$1.split('&');
		var namevalue = {};
		for (var i = 0; i < pairs.length; i++) {
			var pair = pairs[i].split('=');
			namevalue[pair[0]] = pair[1];
		}

		if (namevalue.team == 'India') {
			response.writeHead(200, {'Content-Type': 'text/html'});
			var content = "Current score is 98/1 after 14 Overs";
			response.end(content);
		}
		else {
			response.end();
		}
	}
	else {
		// Load the homepage
		var filePath = '.' + request.url;
		if (filePath == './') {
			filePath = './ajax.html';
		}
		fs.readFile(filePath, function(error, content) {
			if (error) {
				response.writeHead(500, {"Content-Type": "text/html"});
				response.write(error + "\n");
				response.end();
			}
			else {
				response.writeHead(200, {'Content-Type': 'text/html'});
				response.end(content);
			}
		});
	}
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
