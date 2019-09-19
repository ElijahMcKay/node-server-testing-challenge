const server = require('./server'); 

const PORT = process.env.PORT || 5000; 

server.listen(5000, () => `Listening on port ${PORT}`)