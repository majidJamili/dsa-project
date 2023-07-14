const express = require('express');  
const dotenv = require('dotenv')
const morgan = require('morgan')


dotenv.config({path:'./config/config.env'})

const app = express();  
const path = require('path');  
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const connectDB = require('./config/db')

connectDB()

if (process.env.NODE_ENV ==='development') {
    app.use(morgan('dev'))
}

app.get('/', (req,res)=>{
    res.send('Majid App Is working')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`running in ${process.env.NODE_ENV} mode & listening on ${PORT}`);
});