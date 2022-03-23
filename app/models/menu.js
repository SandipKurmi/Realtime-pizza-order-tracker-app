//in modle if our file name is menu so we create menus name file name le 
const mongoose = require('mongoose')

const Schema = mongoose.Schema   
    
const menuSchema = new Schema({
    name:{
        type: String, required: true
    },
    image:{
        type: String, required: true  //store image in url
    },
    price:{
        type: Number, required: true
    },
    size:{
        type: String, required: true
    }

})

module.exports = mongoose.model('Menu', menuSchema) ; //always put singuler and frist letter is capital like Menu, Product so modele create database in collection

//in javascript our nameing canvantion are capital we denotad as class or cunstructer function         