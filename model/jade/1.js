const jade = require('jade');

var str = jade.renderFile('./views/1.jade',{pretty:true,name:'eric',
    json:{width:'200px',height:'200px','backhround':'red'},
    arr:['aaa','bbb','ccc'],
    content:'<a>dsadas</a><h2>hdajshdjksh</h2>'
})

console.log(str)

/**
 * 根据缩进，规定层级
 * 属性规定 srript(src='url',type='script') 内容
 */















