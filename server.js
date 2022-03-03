const express = require('express');
const app  = express();
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

db.on('error', (error) => console.log(error))
db.once('open', () => console.log("connected to database"))

PORT = 3000

app.listen(3000, ()=> {
    console.log(`listening on port:${PORT}`)
})