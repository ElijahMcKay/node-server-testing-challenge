const router = require('express').Router(); 

// model import 
const Birds = require('./bird-model'); 

router.get('/birds', (req, res) => {
    Birds.getBirds()
        .then(birds => {
            res.status(200).json(birds)
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})

router.post('/birds', (req, res) => {
    const body = req.body
    Birds.addAnimals(body)
        .then(birds => {
            res.status(201).json(birds)
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})

module.exports = router; 