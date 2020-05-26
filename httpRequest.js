var http=require('http')
var server=http.createServer((function(req,res)
{
    res.writeHead(201,{"content-type":"text/html"});
    res.write("welcome user !!")
    res.end()
}));
server.listen(8081);