/*
 Title
 Description
 Author
 Date
*/

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(404, { message: 'Your requested url was not found!' });
};
module.exports = handler;
