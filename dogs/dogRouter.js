const router = require('express').Router(); 

// model import 
const Dogs = require('./dog-model'); 

router.get('/dogs', (req, res) => {
    Dogs.getDogs()
        .then(dogs => {
            res.status(200).json(dogs)
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})

router.post('/dogs', (req, res) => {
    const body = req.body
    Dogs.addAnimals(body)
        .then(dogs => {
            res.status(201).json(dogs)
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})

module.exports = router; 