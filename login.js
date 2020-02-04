const {Router} = require('express')
const passport = require('passport')

const login = Router()

login.get(
    '/',
    function(req, res){
        res.render('login')
    } 


)


login.post(

    '/',
    passport.authenticate('local'),
    function(req, res){

         console.log(req.user)
         res.redirect('/')
    }
)

module.exports = login


