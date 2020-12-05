var http = require('http');
var fs = require('fs');
var port = 3000;

http.createServer( function(req,res){
	fs.readFile('demo.html',function(err,data){
		res.writeHead(200, {'Content-type':'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(port);