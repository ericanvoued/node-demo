const fs = require('fs');


//readfile()文件名，回掉函数)
fs.readFile('./www/aaa.txt', function(err, data) {
    if (err) {
        console.log('err')
    } else {
        console.log(data.toString())
    }

});

//文件名，内容，回掉
fs.writeFile('./www/bbb.txt', 'yyy', (err, data) => {
    if (err) {
        console.log('err')
    } else {
        console.log('succeed')
    }
});