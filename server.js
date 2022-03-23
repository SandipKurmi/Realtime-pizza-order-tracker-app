require('dotenv').config()
const express = require('express')
const app = express() //we are calling this function 
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000 //WE ARE SET SERVER PORT
var mongoose = require('mongoose');
const session = require('express-session')

const url = "mongodb://localhost:27017/pizza"
mongoose.connect(url, {useNewUrlParser: true});

var conn = mongoose.connection;

conn.on('connected', function() {
    console.log('database is connected successfully');
});

conn.on('error', console.error.bind(console, 'connection error:'));


// module.exports = conn;

// const mongoose = require('mongoose')
// const url = 'mongodb://localhost:27017/pizza';
// mongoose.connect(url, {useNewParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true});
// const conection = mongoose.connection;
// conection.once('open', () => {
//     console.log('Database connected ..');
// })
// .catch(err => {
//     console.log('connection failed...')
// });


//assets 

//session config :-> hear we create secret key and we put every secret key in env file for security resion
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24}  //only for 24 hours
}))


app.use(express.static('public'))
//set templet engin
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

require('./routes/web')(app)  //hear we resiving function




app.listen(PORT, () => console.log(`realtime pizza app listening on port ${PORT}!`))