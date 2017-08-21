
const fs = require('fs');
const express = require('express');
const ExpressPeerServer = require('peer').ExpressPeerServer;
const app = express();

const server = app.listen(process.env.PORT || 3000);
const options = {
};
app.use('/api', ExpressPeerServer(server, options));

app.use(express.static(__dirname + '/public'));
