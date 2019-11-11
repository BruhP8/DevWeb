const http = require('http');
const port = 3000;
const adr = 'localhost';

const server = http.createServer((req, res) =>{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end("Hello world, you sent a request but im too stupid to deal with it atm... Check back later !");
	console.log('recieved a request and replied to it.');
})

server.listen(port, adr, () => {
  	console.log(`Server started, visit http://${adr}:${port}/ to trigger something cool 8)`);

})
