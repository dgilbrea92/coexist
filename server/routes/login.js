const express = require('express');
const apiRouter = express.Router();

const JwtsController = require('./controllers/JwtsController');
const BcryptController = require('./controllers/BcryptController');

//signup and create new board
apiRouter.post(
  '/signup',
  BcryptController.signup,
  JwtsController.setJwt,
  (req, res) => {
    //on success of board creation, send back unique ID string
    res.redirect('/');
  }
);

//login check
apiRouter.get(
  '/',
  BcryptController.login,
  JwtsController.setJwt,
  (req, res) => {
    //check if board and login string exist
    res.redirect('/');
  }
);
apiRouter.get('/verify', JwtsController.isLoggedIn, (req, res) => {
  //check if board and login string exist
  res.status(200).json(res.locals);
});
