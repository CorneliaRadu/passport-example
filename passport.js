
const passport = require('passport')

const db = require('./database')

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    {usernameField: 'email'},
  function(username, password, done) {
      const user = db.users.find(
          user => user.name === username
      )

      if(!user){
          done(null, false, {message: 'no such user'})

          return 
      }

      if(user.password !== password ){
        done(null, false, {message: 'wrong pass'})

        return
    }


      done(null, user)
    
  }
));


passport.serializeUser(
    
    function(user, done) {

    done(null, user.id);

    
  });
  
  passport.deserializeUser(
    function(id, done){
        const user = db.users.find(
            user => user.id === id
        )
      done(null, user);
    
  });



  


