var details = require('./db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPassword = password;
const someOther = 'Steveroers';
const someOther2 = 'Ayfdydjh';
const Name = name;
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPassword, salt, function(err, hash) {
     console.log(hash)
     bcrypt.compare(someOther, hash,(err, result) => {
     if (result) {
         console.log("Login Successful!!")
     }
     else{
         console.log("Impossible!!!")
     }
     });
    });
});
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(Name, salt, function(err, hash) {
     console.log(hash)
     bcrypt.compare(someOther2, hash,(err, result) => {
     if (result) {
         console.log("Login Name Successful!!")
     }
     else{
         console.log("Impossible!!!, That is not correct!")
     }
     });
    });
});
 



