const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

var user = {};

var server = http.createServer(function (req, res) {
    var str = ''
    req.on('data', function (data) {
        str += data
    })

    req.on('end', function () {
        var obj = urlLib.parse(req.url);

        const url = obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);

        console.log(GET,POST)
        //区分接口。文件
        if (url == '/user') {
            console.log(url)
            switch (GET.act) {
                case 'reg':
                    //查看是否已经有了
                    console.log('reg')
                    if (users[GET.user]) {
                        res.write({ok: false, msg: '用户已经存在'})
                    } else {
                        users[GET.user] = GET.pass;

                        res.write({ok: true, msg: '注册成功'})
                    }
                    break;
                case  'login':
                    //检查是否存在
                    //检查用户密码
                    console.log('log')
                    if (users[GET.user] == null) {
                        res.write({ok: false, msg: '用户不存在'})
                    } else if (users[GET.user] != GET.pass) {
                        res.write({ok: false, msg: '用户 名或密码错误'})
                    } else {
                        res.write({ok: true, msg: '登陆成功'})
                    }

                    break;
                default:
                    res.write({ok: false, msg: '未知的act'})
                    break
            }
            res.end()
        } else {
            //读取文件
            var fileName = './www' + url;
            fs.readFile(fileName, function (err, data) {
                if (err) {
                    console.log(1)
                    res.write('404')
                } else {
                    console.log(2)
                    res.write(data)
                }
            })
        }
    })
}).listen(8082)







