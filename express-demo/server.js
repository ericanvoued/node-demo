const express = require('express');
const bodyParser = require('body-parser')

var server = express();

server.listen(8089);


server.use(bodyParser.urlencoded({
    extended:true,//扩展模式 bolean
    limit:1*1024 //限制post数据大小 default 100k
}))

//get post
server.use('/',function(req,res,next){
    console.log(req.body)
    // console.log(req.query)

    next()// 链式操作
})


//req.query  GET  无需额外的中间件
//req.body  POST  需要中间件，bodyParser 分两步



















