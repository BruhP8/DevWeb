var http = require('http');

const server = http.CreateServer((req, res) =>{
	console.log("hey, you recieved a request bitch")
})

server.listen(3000, "localhost", () => {
	console.log("server started")
})