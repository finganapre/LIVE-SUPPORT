const http = require('http');
	  fs   = require('fs');

const server = http.createServer((req, res) => {
	//console.log(req.url);
	//console.log(req.method);
	//console.log(req.headers);

	switch(req.url) {

		// html
		case '/' || '/index.html':
			fs.readFile('index.html', { encoding: 'utf8' }, function(error, file) {
				res.writeHead(200, {'Content-type': 'text/html'});
				res.end(file);
    		});
		break;

		case '/reg.html':
			fs.readFile('reg.html', { encoding: 'utf8' }, function(error, file) {
				res.writeHead(200, {'Content-type': 'text/html'});
				res.end(file);
    		});
		break;

		case '/login.html':
			fs.readFile('login.html', { encoding: 'utf8' }, function(error, file) {
				res.writeHead(200, {'Content-type': 'text/html'});
				res.end(file);
    		});
		break;

		case '/chat.html':
			fs.readFile('chat.html', { encoding: 'utf8' }, function(error, file) {
				res.writeHead(200, {'Content-type': 'text/html'});
				res.end(file);
    		});
		break;

		case '/write-an-prop.html':
			fs.readFile('write-an-prop.html', { encoding: 'utf8' }, function(error, file) {
				res.writeHead(200, {'Content-type': 'text/html'});
				res.end(file);
    		});
		break;

		case '/user-props.html':
			fs.readFile('user-props.html', { encoding: 'utf8' }, function(error, file) {
				res.writeHead(200, {'Content-type': 'text/html'});
				res.end(file);
    		});
		break;

		case '/personal-page.html':
			fs.readFile('personal-page.html', { encoding: 'utf8' }, function(error, file) {
				res.writeHead(200, {'Content-type': 'text/html'});
				res.end(file);
    		});
		break;

		case '/admin-props.html':
			fs.readFile('admin-props.html', { encoding: 'utf8' }, function(error, file) {
				res.writeHead(200, {'Content-type': 'text/html'});
				res.end(file);
    		});
		break;

		// css
		case '/css/libs.css':
			fs.readFile('css/libs.css', { encoding: 'utf8' }, function(error, file) {
				res.writeHead(200, {'Content-type': 'text/css'});
				res.end(file);
    		});
		break;

		case '/css/main.css':
			fs.readFile('css/main.css', { encoding: 'utf8' }, function(error, file) {
				res.writeHead(200, {'Content-type': 'text/css'});
				res.end(file);
    		});
		break;

		// js
		case '/js/main.js':
			fs.readFile('css/main.js', { encoding: 'utf8' }, function(error, file) {
				res.writeHead(200, {'Content-type': 'text/js'});
				res.end(file);
    		});
		break;

		case '/js/libs.min.js':
			fs.readFile('js/libs.min.js', { encoding: 'utf8' }, function(error, file) {
				res.writeHead(200, {'Content-type': 'text/js'});
				res.end(file);
    		});
		break;

		// favicon
		case '/img/favicon.ico':
			fs.readFile('img/favicon.ico', { encoding: 'utf8' }, function(error, file) {
				res.writeHead(200, {'Content-type': 'image'});
				res.end(file);
    		});
		break;

		

		// error
		default:
			console.log(req.url);
			res.writeHead(200, {'Content-type': 'text/plain'});
			res.end('404 not found');
	}
	
}).listen(3000, () => console.log('start server on port 3000'));

/*
server.on('request', (req, res) => {
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.end('test');
});


server.listen(3000, () => console.log('start server on port 3000'));
*/