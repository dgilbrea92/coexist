const express = require('express');
const apiRouter = express.Router();
const BoardController = require('../controllers/BoardController');

//get all stickies for a user board
apiRouter.get('/stickies/:id', BoardController.getStickies, (req, res) => {
  //get all stickies for current board
  res.status(200).json(res.locals.stickies);
});

//post new sticky
apiRouter.post('/stickies', BoardController.postSticky, (req, res) => {
  res.status(200).json(res.locals);
});

//edit a sticky
apiRouter.patch('/stickies', BoardController.updateSticky, (req, res) => {
  res.status(200);
  // .json(res.locals.sticky);
});

//delete a sticky
apiRouter.delete('/stickies', BoardController.deleteSticky, (req, res) => {
  res.status(200);
});

// // uploading a file to category
// apiRouter.post('/upload', FileController.uploadFile, (req, res) => {
//   res.status(200);
// });

// // retrieving files for category
// apiRouter.get('/files', FileController.getFiles, (req, res) => {
//   res.status(200);
// });

module.exports = apiRouter;
