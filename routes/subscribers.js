const express = require('express');
const router = express.Router()
//get all subscribers
router.get('/', (req, res) => {
    res.send("hey subscriber");
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