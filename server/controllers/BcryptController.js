const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = require('../db/models');
const queries = require('../db/queries');

const BcryptController = {};

BcryptController.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    db.query({
      text: queries.signUp,
      values: [req.body.username, hash, req.body.name],
    }).then(result => {
      console.log(result.rows);
      res.locals.userInfo = result.rows;
      return next();
    });
  });
};

BcryptController.login = (req, res, next) => {
  // retrieve account information for given username
  db.query({
    text: queries.checkUser,
    values: [req.body.username],
  })
    .then(user => {
      // retrieve stored password from db, compare to bcrypted entry pass
      const passwordResult = user.rows[0].password;

      bcrypt.compare(req.body.password, passwordResult, (err, result) => {
        if (err) {
          next({
            log:
              'Error in middleware BcryptController.login compare function' +
              err,
          });
        } else if (result === true) {
          console.log('logged in');
          // bcrypt populates result with a boolean based on if theres a match
          return next();
        }
      });
    })
    .catch(err => {
      //redirect to home if err
      next({
        log: 'Error in middleware BcryptController.login query' + err,
      });
    });
};

module.exports = BcryptController;
