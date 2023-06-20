require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')


const app = express()
app.use(cors());

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

const guideRouter = require('./routes/guide')
app.use('/guide', guideRouter)


const PORT = 4000;
app.listen(PORT, () => 
console.log(`Server started on port ${PORT}`)
);