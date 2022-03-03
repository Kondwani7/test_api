const express = require('express');
const router = express.Router()
//get all subscribers
router.get('/', (req, res) => {
    console.log(req.body);
})
//get one subscriber
router.get('/', (req, res) => {
    console.log(req.body)
})
//create a subscriber
router.post('/', (req, res)  => {
    console.log()
})
//update subscriber based on a specific field of interest
router.patch()
//delete subscriber

module.exports = router;