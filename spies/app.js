let db = require('./db.js')


module.exports.handleSignup = (email, password) => {
  // Check if email
  // save  db
  db.saveUser({
    email,
    password
  });
  // send welcome email

};
