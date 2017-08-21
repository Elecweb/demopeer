const http = require('https');
const fs = require('fs');
var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};


const server = http.createServer(options,(req,res)=>{
    console.log('req.url',req.url);
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
server.listen(8080);