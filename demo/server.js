const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');


var server = http.createServer((req, res) => {
    // var file_name = './www' + req.url;
    var GET = {},
        arr1, arr2, arr3;

    // if (req.url.indexOf('?') != -1) {
    // arr1 = req.url.split('?');
    // arr2 = arr1[1].split('&');
    // for (var i = 0; i < arr2.length; i++) {
    //     arr3 = arr2[i].split('=');
    //     GET[arr3[0]] = arr3[1]
    // }
    // GET = querystring.parse(arr1[1])


    // } else {
    // var url = req.url;

    // }
    var obj = urlLib.parse(req.url, true);

    var url = obj.pathname;
    GET = obj.query


    console.log(GET, url)




    // fs.readFile(file_name, function(err, data) {
    //     if (err) {
    //         res.write('404')
    //     } else {
    //         res.write(data)
    //     }
    //     res.end();
    // })


})





//监听-等待
server.listen(3001)