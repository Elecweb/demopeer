const http = require('https');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    
    switch(req.url){
        case "/":
            console.log('/','case');
            fs.readFile('ps-webrtc-peerjs-final.html',(err,data)=>{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }); 
            break;
        case "/ps-webrtc-peerjs-final.js":
            fs.readFile("ps-webrtc-peerjs-final.js",(err,data)=>{
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.write(data);
                res.end();
            }); 
            break;
        case "/style.css":
             fs.readFile("style.css",(err,data)=>{
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                res.end();
            });
            break;
        case "/peer.js":
            fs.readFile("peer.js",(err,data)=>{
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.write(data);
                res.end();
            });
            break;
    }
    
});
console.log(process.env.PORT);
server.listen((process.env.PORT || 5000));