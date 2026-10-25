const http = require("http");

const server = http.createServer((req, res) => {
    if(req.method === "GET" && req.url === "/")
    {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const result = num1/num2;

        res.writeHead(200, {"content-type": "text/html; charset=utf8"});
        res.end(`${num1}/${num2} = ${result}`);
    }
    else {
        res.writeHead(404, {"content-type": "text/plain"});
        res.end("Not Found");
    }
})

server.listen(8080, () => {console.log("Server is listening on http://localhost:8080");})
