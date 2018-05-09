const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();

/**
 1.cookie空间非常小4kb---省着用
 2.安全性差

 做法
 1.精打细算--签名
 2.校验cookie是否被篡改

 a.发送cookie
 res.secrete=string
 res.cookie(key,value,{path:'**',maxAge:*1000,signed:boolean})

 b.读取cookie
 server.use（cookieParser(secrete)
 server.use(function(){
            req.cookies   //unsigned
            req.signedCookies   //signed  基本信任
        })

 c. delete cookie
 res.clearCookie(name)

 d.加密cookie
 cookie-encryter

 e.session-存在于服务器
    不能独立存在的，基于cookie

 */


// server.use(cookieParser('wewewesad'))
server.use(cookieSession(
    {
        name:'eric1',
        keys: ['aaa','bbb','ccc'],
        maxAge:30*24*3600*1000
    }
))

server.use('/', function (req, res) {
    // req.secret = 'wewewesad';
    // res.cookie('user', 'eric2', {path: '/aaa', maxAge: 30 * 24 * 3600 * 1000});//签名，防篡改
    // res.cookie('user', 'eric2', {path: '/', maxAge: 30 * 24 * 3600 * 1000, signed: true});//签名，防篡改
    // console.log(req.cookies)//输出没有签过名的cookie
    // console.log(req.signedCookies)//输出签过名的cookie，cookie空间小，省着用

    if(req.session.count==null){
        req.session['count'] =1
    }else {
        req.session['count'] ++
    }
    console.log(req.session.count)

    res.send('ok');
})

server.listen(8280);







