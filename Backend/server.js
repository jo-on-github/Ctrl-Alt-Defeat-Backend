require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const db = mongoose.connection

db.once('open', () => {
    console.log('Connected to Database')
});

db.on('error', (error) => {
    console.log(error)
});

app.use(express.json());

const cityRouter = require('./routes/city')
app.use('/home', cityRouter)


const PORT = 3000;
app.listen(PORT, () => 
console.log(`Server started on port ${PORT}`)
);