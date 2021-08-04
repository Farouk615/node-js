const http = require('http');
const fs = require('fs');
const url = require('url');
const routing = require('./routing')
const server = http.createServer((req,res)=>{
   const path = url.parse(req.url).pathname;
    switch (path) {
        case '/':
        routing.handlerequest('./index.html',res)
        break;
        case '/hello':
            routing.handlerequest('./hello_page.html',res)
            break;
        default :
        res.end('error in routings');
        break;
    
    }
});




server.listen(3000,()=>{
    console.log('server is listening');
})