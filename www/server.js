'use strict';

let http = require('http');
let express = require('express');


let app = express();
let server = http.createServer(app);




app.use(express.static(__dirname + '/'));

server.listen(8080,() => console.log('Ready to work!'));
