// http -> launches a server and send requests
// https-> launches a SSL server

const http = require('http')
const fs = require('fs')
// function inside a createServer is a request listener and is executed whenever a request comes.
const server = http.createServer((req, res)=>{
    //console.log(req)
    //to get exit from the server
    const method = req.method

    if(req.url === '/')
    {
        res.write('<html><head><title>Server</title></head><body><form action = "/message" method = "POST"><input type = "text" name = "something"></input><button type = "submit">Send</button></form></body></html>')
        return res.end()
    }
    else if(req.url === '/message' && method === 'POST')
    {
        const body = []
        req.on('data', (chunk)=>{ body.push(chunk)
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            //writeFileSync is used inplace of writeFile as it blocks the execution of next line until the file is create and it is used when the message size is too large
            fs.writeFileSync('message.txt',message,(err)=>{
                res.statusCode=302
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html><head><title>Server</title></head><body><h1>Hello from my Node.js server</h1></body></html>')
    res.end()
    //process.exit()
});

server.listen(3000)