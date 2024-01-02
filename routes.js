const fs = require('fs')


const requestHandler = (req, res) => {
    const method = req.method
    const url = req.url

    if(url === '/')
    {
        res.write('<html><head><title>Server</title></head><body><form action = "/message" method = "POST"><input type = "text" name = "something"></input><button type = "submit">Send</button></form></body></html>')
        return res.end()
    }
    else if(url === '/message' && method === 'POST')
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
}

//module.exports = requestHandler

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded stuff'
// }

// module.exports.handler = requestHandler
// module.exports.someText = "Some hard coded stuff"

exports.handler = requestHandler;
exports.someText = "Some hard coded stuff";