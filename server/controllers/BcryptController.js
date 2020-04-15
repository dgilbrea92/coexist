const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = require('../db/models');
const queries = require('../db/queries');

const BcryptController = {};

BcryptController.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    db.query({
      text: queries.createUser,
      values: [req.body.username, req.body.boardname, hash],
    }).then(result => {
      console.log(result);
      res.locals.userInfo = result.rows;
      return next();
    });
  });
};

BcryptController.login = (req, res, next) => {
  //check if
  db.query({
    text: queries.checkUser,
    values: [req.body.username],
  })
    .then(user => {
      bcrypt.compare(req.body.password, user, (err, result) => {
        if (err) {
          next({
            log: 'Error in middleware BoardController.postStickies' + err,
          });
        } else if (result === true) {
          //set session here
          return next();
        }
      });
    })
    .catch(err => {
      //redirect to home if err
      next({
        log: 'Error in middleware BoardController.postStickies' + err,
      });
    });
};

module.exports = BcryptController;
