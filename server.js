const express = require('express')
const app = express() //we are calling this function 
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000 //WE ARE SET SERVER PORT


//set templet engin
// app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')


//assets 
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, () => console.log(`realtime pizza app listening on port ${PORT}!`))