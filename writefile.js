var fs = require('fs');
var content = 'Hello World, Welcome to Node JS';

fs.writeFile('itsanewfile.txt', content, function(err){
	if(err) throw err;
	console.log('File Created and Saved successfully');
});