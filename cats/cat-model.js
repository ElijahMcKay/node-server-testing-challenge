const db = require('../data/db-config'); 

module.exports = {
    getCats
}

function getCats() {
    return db('animals').select('cats'); 
}
