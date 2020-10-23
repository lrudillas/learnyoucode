const http = require('http')
const url = require('url')

function parseTime(time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function unixTime(time) {
	return {
		unixtime: time.getTime() 
	}
}

http.createServer(function (req, res) {
	var parsedURL = url.parse(req.url, true)
	var time = new Date(parsedURL.query.iso)
	var result

	if (/^\/api\/parsetime/.test(req.url))
		result = parseTime(time)
	else
		result = unixTime(time)

	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(result))
	} else {
		res.writeHead(404)
		res.end()
	}
}).listen(Number(process.argv[2]))