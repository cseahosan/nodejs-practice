/*
 Title
 Description
 Author
 Date
*/

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');

// app object
const app = {};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`Listening port ${environment.port}`);
    });
};

// handle request and response
app.handleReqRes = handleReqRes;
// start the server
app.createServer();
