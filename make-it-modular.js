const filterFn = require('./my-module.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
	if (err)
		console.error(err)

	list.forEach(function (file) {
		console.log(file)
	})
})
