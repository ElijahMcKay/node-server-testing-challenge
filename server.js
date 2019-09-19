const express = require('express'); 
const server = express(); 

// router imports 
const dogRouter = require('./dogs/dogRouter'); 
const catRouter = require('./cats/catRouter'); 
const birdRouter = require('./birds/birdRouter'); 

// security imports 
const cors = require('cors'); 
const helmet = require('helmet'); 

// instantiating middleware
server.use(express.json()); 
server.use(cors()); 
server.use(helmet()); 

// assigning routes to resources 
server.use('/', dogRouter); 
server.use('/', catRouter); 
server.use('/', birdRouter); 

// exporting server for index.js & testing
module.exports = server

