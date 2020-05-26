var http=require('http')
var fs=require('fs')
var server=http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    var readFile=fs.createReadStream(__dirname+'/index.html','utf8');
    readFile.pipe(res)
})
server.listen(8000,'127.0.0.1')