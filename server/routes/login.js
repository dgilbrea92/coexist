const express = require('express');
const loginRouter = express.Router();
const BcryptController = require('../controllers/BcryptController');
const sessionController = require('../controllers/sessionController');

//signup and create new board
loginRouter.post(
  '/signup',
  BcryptController.signup,
  BcryptController.login,
  (req, res) => {
    //on success of board creation, send back unique ID string
    res.redirect('/');
  }
);

//login check
loginRouter.get('/isUser', BcryptController.login, (req, res) => {
  //check if board and login string exist
  res.redirect('/');
});

module.exports = loginRouter;
