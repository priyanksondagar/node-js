let fs=require('fs')
fs.readFile('D:/javaScript/node/add.js','utf8',function(error,data){
    fs.writeFile('Moved.txt',data,function(){
        console.log('data moved')
    });
})