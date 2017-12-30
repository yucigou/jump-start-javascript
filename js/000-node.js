console.log('Hello Node.js');
console.log(2 + 3);

var fs = require('fs');
fs.writeFile(__dirname + '/index.html', '<h1>Hello Node</h1>', function(error){
	if (error) {
		return console.log(error);
	} else {
		return console.log('Congratulations');		
	}
});

var https = require('https');
var posterUrl = 'https://raw.githubusercontent.com/yucigou/codegoodworks/gh-pages/assets/images/2017-12-16-jump-start-html-css-mobile.png';
https.get(posterUrl, function(response){
	response.pipe(fs.createWriteStream(__dirname + '/poster.png'));
});