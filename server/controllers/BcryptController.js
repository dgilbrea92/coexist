const bcrypt = require('bcrypt');
const saltRounds = 10;
// const db = require('../models');

const BcryptController = {};

BcryptController.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    db.Board.create({
      board: req.body.board,
      password: hash,
    }).then(data => {
      if (data) {
        console.log(data);
      }
    });
  });

  //assign board and string after signup complete
  let board = 'board';
  let string = 'uniqueString';
  //return boardName and new unique login string
  res.locals.boardDetails = { boardName: board, key: string };
  return next();
};

BcryptController.login = (req, res, next) => {
  //check if
  db.Board.findOne({
    where: {
      board: req.body.board,
    },
  }).then(board => {
    if (!board) {
      //redirect to wherever login happens
      res.redirect('/');
    } else {
      bcrypt.compare(req.body.password, board, (err, result) => {
        if (result === true) {
          return next();
        }
      });
    }
  });
};

module.exports = BcryptController;
