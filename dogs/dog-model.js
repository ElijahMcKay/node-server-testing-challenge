const db = require('../data/db-config'); 

module.exports = {
    getDogs,
    addAnimals
}

function getDogs() {
    return db('animals').select('dogs'); 
}

function addAnimals(animals) {
    return db('animals').insert(animals); 
}