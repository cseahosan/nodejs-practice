/*
 Title
 Description
 Author
 Date
*/

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling
    const parsedUrl = url.parse(req.url, true);
    // console.log(parsedUrl)

    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/$/g, '');
    // console.log(trimmedPath);
    const method = req.method.toLowerCase();
    // console.log(method);
    const queryStringObject = parsedUrl.query;
    // console.log(queryStringObject);
    const headerObject = req.headers;
    // console.log(headerObject);
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        res.end('Hello World');
    });
};

module.exports = handler;
