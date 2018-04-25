const urlLib = require('url')

var obj = urlLib.parse('http://localhost?name=lll&psw=dasdas', true)

console.log(obj)