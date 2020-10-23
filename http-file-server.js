const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const file = process.argv[3]

const server = http.createServer(function (req, res) {
	fs.createReadStream(file).pipe(res)
})

server.listen(+port, function () {
	console.log('Listening on http://localhost:%s', port)
})