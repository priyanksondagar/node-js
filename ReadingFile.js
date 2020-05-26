let file=require('fs')
let read=file.readFile('D:/javaScript/node/UseModule.js','utf8',function(error,data){
    console.log(data);
});