let http = require('http');
let fs = require('filesystem');


var server = http.createServer((req, res) => {
    //console.log(req.url)
    switch (req.url) {
        case '/1.html':
            res.write('111')
            break;
        case '/2.html':
            res.write('222')
            break;
        default:
            res.write('404');
            break;
    }
    // res.write('有人来了')

    res.end()
})





//监听-等待
server.listen(3000)