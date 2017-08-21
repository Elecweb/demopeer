
const fs = require('fs');
const express = require('express');
var PeerServer = require('peer').PeerServer;
var server = PeerServer({
    port: 9000, 
    path: '/myapp',
});

server.use(express.static(__dirname + '/public'));
