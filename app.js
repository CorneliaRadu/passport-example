const path = require('path')
const express = require('express');
const app = express();
const login = require('./login')
const passport = require ('passport')
require('./passport')

const cookieParser = require('cookie-parser')
const session = require ('express-session')
app.use(express.static(path.join(__dirname, 'public')))

app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize())
app.use(passport.session())

app.use(express.urlencoded({extended: true}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/login', login)

/* GET home page. */
app.get('/', (req, res, next) => {
    res.render('index', { title: 'Wild Code School', user: req.user });
  })
  
  app.get('/dashboard', (req, res, next) => {
    res.render('dashboard', { user: req.user });
  })
  

app.listen(


    5001,
    function(){

        console.log('Running on 5001!')
    }
)


