const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const studentRouter = require('./routes/student')
const bodyparser = require('body-parser')

const app = express();

app.use(bodyparser.json());
app.use('/',studentRouter)

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})