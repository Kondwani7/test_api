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
router.patch('/:id', (req,res)=> {
    if(req.body.name != null){
         req.body.name
    }
    if (req.body.channel != null){
        req.body.channel
    }
    try{
        const updatedSubscriber = await = res.subscriber.save()
        res.json(updatedSubscriber)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})
//delete subscriber
router.delete('/:id', async(req, res)=> {
    try{
        await res.body.remove()
        res.json({message: "Delete subscriber"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
})
module.exports = router;