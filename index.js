// imports
const http = require('http');

// constants
const port = process.env.PORT ? process.env.PORT : 3000;
const region = process.env.NOW_REGION ? process.env.NOW_REGION : 'dev';

http.createServer(function (request, response) {

    let pong = {
        data : null,
        port : port,
        region : region,
    };

    request.on('data', chunk => {
        pong.data = `${chunk}`;
    });
    
    request.on('end', () => {
        response.writeHead(200);
        response.write(JSON.stringify(pong));
        response.end();
    });

}).listen(port, function() {
    console.log(`listening on port ${port}`);
});