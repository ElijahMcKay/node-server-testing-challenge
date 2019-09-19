const db = require('../data/db-config'); 

module.exports = {
    getBirds
}

function getBirds() {
    return db('animals').select('birds'); 
}
