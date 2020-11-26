const express = require('express');
const homeRoute = require('./routes/home');
const keys = require('./config/keys')
const student = require('./models/Student');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const app = express();



// CONNECT KE MONGODB
mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
    .then(console.log("mongodb is connected successfully"))
    .catch(err=>console.log("An error is occered to connect to db"));





// SETUP MIDDLEWARE
// SETUP VIEW ENGINE
app.set('view engine', 'ejs');
// STATIC FOLDER SETUP
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())




// ROUTING 
app.use('/', homeRoute);




// RUNNING SERVER 
const PORT = process.env.PORT || 8000;

// MEMULAI SERVER
app.listen(PORT, ()=>{
    console.log('This app is rrunning on:', PORT);
})