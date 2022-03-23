function cartController(){
    //we are using factory function  this function only return object
    return{
        cart:(req, res) => {
            res.render('customers/cart')
        }
    }
}

module.exports = cartController;