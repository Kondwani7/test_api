const express = require('express');
const app = express()
const router = express.Router();
const Subscriber = require('../models/subscriber');
const bodyParser = require('body-parser')

app.use(bodyParser.json)
const jsonParser = bodyParser.json()



//get all subscribers
router.get('/', async (req, res) => {
    try{
        const subscribers = await Subscriber.find()
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
router.post('/', async(req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        channel: req.body.channel
    });
    try{
        const newSubscriber = await this.post.save();
        res.json(newSubscriber);
    }catch(err){
        res.json({message:err.message})
    }
})

//update subscriber based on a specific field of interest
router.patch('', (req,res)=> {

})
//delete subscriber
router.delete('/:id', (req, res)=> {

})
module.exports = router;