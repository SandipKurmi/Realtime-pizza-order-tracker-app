const Menu = require('../../models/menu')
function homeController(){
    //we are using factory function  this function only return object
    return {
        async index(req, res) {
            const pizzas = await Menu.find()
            return res.render('home' , {pizzas: pizzas}) 

                     
            
        }
    }
}

module.exports = homeController;

 // Menu.find().then(function(pizzas){
            //     console.log(pizzas)
            //     return res.render('home' , {pizzas: pizzas}) 
                
            // }) 

//hear we are going to fetch database and display on a paje