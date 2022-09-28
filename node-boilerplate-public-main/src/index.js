var http = require("http");
const { runInNewContext } = require("vm");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if (req.url == "/welcome") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(' Welcome to Dominos!');
        res.end();
    }
    else if (req.url == "/contact") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }));
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write("API not found")
        res.end()

    }
}

httpServer.listen(8081)

module.exports = httpServer;