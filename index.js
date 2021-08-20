/*
 Title
 Description
 Author
 Date
*/

// dependencies
const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');
const { handleReqRes } = require('./helpers/handleReqRes');

// app object
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening port ${app.config.port}`);
    });
};

// handle request and response

app.handleReqRes = handleReqRes;
// start the server
app.createServer();
