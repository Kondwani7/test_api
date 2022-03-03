const express = require('express');
const app  = express();
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on('error', (error) => console.log(error))
db.once('open', () => console.log("connected to database"))

PORT = 5000

app.listen(5000, ()=> {
    console.log(`listening on port:${PORT}`)
})