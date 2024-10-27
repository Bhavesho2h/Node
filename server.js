const http = require('http');

const server = http.createServer(function(req,res){
    console.log(req,'what is the req');
    if(req.url === '/getData'){
        res.end('this is your data');
    }
    res.end('hello wolrd');
})

server.listen(3001);