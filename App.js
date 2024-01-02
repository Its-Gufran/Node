// http -> launches a server and send requests
// https-> launches a SSL server
const http = require('http')
const routes = require('./routes')

// function inside a createServer is a request listener and is executed whenever a request comes.
const server = http.createServer(routes.handler)
    //console.log(req)
    //to get exit from the server
    //process.exit()


server.listen(3000)

//Nodejs is single threaded even then it handles multiple requests
//Event loop handles all the event listers i.e. easy tasks and all heavy lifting tasks are handled by worker pool(handles by Nodejs and runs on different thread)
//Callback by worker pool are handled by event loop