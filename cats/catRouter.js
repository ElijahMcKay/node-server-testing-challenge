const router = require('express').Router(); 

// model import 
const Cats = require('./cat-model'); 

router.get('/cats', (req, res) => {
    Cats.getCats()
        .then(cats => {
            res.status(200).json(cats)
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})

router.post('/cats', (req, res) => {
    const body = req.body
    Cats.addAnimals(body)
        .then(cats => {
            res.status(201).json(cats)
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})

module.exports = router; 