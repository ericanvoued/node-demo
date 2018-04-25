const http = require('http');
var querystring = require('querystring')

http.createServer((req, res) => {
    var str = ''
    var i = 0
    req.on('data', function(data) {
        console.log('第 ${i} 次收到数据')
        str += data
    });

    req.on('end', function() {
        var post = querystring.parse(str)
        console.log(post)
    })
}).listen(81)