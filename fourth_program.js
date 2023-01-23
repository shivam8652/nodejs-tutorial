// creating server in nodejs
const http = require('http');

http.createServer((req,res)=>{
    
    res.write("<h1>My First Page</h1>");
    res.end();
    
}).listen(4500);