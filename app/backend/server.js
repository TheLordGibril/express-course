const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const colors = require('colors')

const connectDB = require('./config/db')
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})