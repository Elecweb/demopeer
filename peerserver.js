
const fs = require('fs');
var PeerServer = require('peer').PeerServer;
var server = PeerServer({
    port: 9000, 
    path: '/myapp',
    ssl: {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
    }
});