const express = require('express');
<<<<<<< HEAD:server/routes/login.js
const loginRouter = express.Router();
=======
const authRouter = express.Router();

>>>>>>> staging:server/routes/auth.js
const BcryptController = require('../controllers/BcryptController');
const sessionController = require('../controllers/sessionController');

//signup and create new board
authRouter.post(
  '/signup',
  BcryptController.signup,
  BcryptController.login,
  (req, res) => {
    //on success of board creation, send back unique ID string
    res.redirect('/');
  }
);

authRouter.post('/login', BcryptController.login, (req, res) => {
  res.redirect('/');
});

// //login check
// authRouter.get('/isUser', BcryptController.login, (req, res) => {
//   //check if board and login string exist
//   res.redirect('/');
// });

module.exports = authRouter;
