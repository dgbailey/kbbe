const s = require('./server');

const port = '8080';
// A port number is a way to identify a specific process to which an Internet or other network message is to be forwarded when it arrives at a server.
s.listen(port,()=> console.log('server running on port',port));