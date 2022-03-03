const express = require('express');
const router = express.Router()
const Subcriber = require('../models/subcriber');


//get all subscribers
router.get('/', async (req, res) => {
    try{
        const subscribers = await Subcriber.find()
        res.json(subscribers)
    }catch(err){
        res.status(500).json({message: err.message});
    }
})
//get one subscriber
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
//create a subscriber
router.post('/', (req, res)  => {
    res.send()
})
//update subscriber based on a specific field of interest
router.patch('', (req,res)=> {

})
//delete subscriber
router.delete('/:id', (req, res)=> {

})
module.exports = router;