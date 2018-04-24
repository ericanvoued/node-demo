const http = require('http');
const fs = require('fs');

var server = http.createServer((req, res) => {
    var file_name = './www' + req.url;

    fs.readFile(file_name, function(err, data) {
        if (err) {
            res.write('404')
        } else {
            res.write(data)
        }
        res.end();
    })


})





//监听-等待
server.listen(3001)