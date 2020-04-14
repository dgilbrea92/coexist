const express = require('express');

const apiRouter = express.Router();

const DashboardController = require('./controllers/DashboardController');

//get all stickies
apiRouter.get('/stickies', DashboardController.getStickies, (req, res) => {
  //get all stickies for current board
  res.status(200).json(res.locals);
});

//post new sticky
apiRouter.post('/stickies', DashboardController.postStickies, (req, res) => {
  res.status(200).json(res.locals);
});

//edit a sticky
apiRouter.patch('/stickies', DashboardController.updateStickies, (req, res) => {
  res.status(200).json(res.locals);
});

//delete a sticky
apiRouter.delete(
  '/stickies',
  DashboardController.deleteStickies,
  (req, res) => {
    res.status(200).json(res.locals);
  }
);
