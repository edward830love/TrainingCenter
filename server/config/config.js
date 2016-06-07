var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/tc',
        rootPath: rootPath,
        port: process.env.PORT || 8886
    }
}