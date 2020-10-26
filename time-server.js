const net = require('net')

function addZero(i) {
	return (i < 10 ? '0' : '') + i
}

function today() {
	let d = new Date()
	return d.getFullYear() + '-'
		+ addZero(d.getMonth() + 1) + '-'
		+ addZero(d.getDate()) + ' '
		+ addZero(d.getHours()) + ':'
		+ addZero(d.getMinutes())
}

const server = net.createServer(function (socket) {
	socket.end(today() + '\n')
})

server.listen(Number(process.argv[2]))