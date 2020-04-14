//database stuff
const { Pool } = require('pd');

const pool = new Pool({
  //stuff
});
let boardName;
let boardQuery;
let stickyId;
let newStickyQuery;
let updateStickyQuery;
let deleteStickyQuery;

const BoardController = {};

BoardController.getStickies = (req, res, next) => {
  // boardName = req.body.board?
  pool.query(boardQuery, (err, result) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(result.rows);
      result.locals.board = result.rows;
      return next();
    }
  });
};

BoardController.postSticky = (req, res, next) => {
  // boardName = req.body.board
  pool.query(newStickyQuery, (err, result) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(result.rows);
      result.locals.sticky = result.rows;
      return next();
    }
  });
};

BoardController.updateSticky = (req, res, next) => {
  // boardName = req.body.board
  // stickyId = req.body.stickyId
  pool.query(updateStickyQuery, (err, result) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(result.rows);
      result.locals.sticky = result.rows;
      return next();
    }
  });
};

BoardController.deleteSticky = (req, res, next) => {
  // boardName = req.body.board
  // stickyId = req.body.stickyId
  pool.query(deleteStickyQuery, (err, result) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(result.rows);
      result.locals.sticky = result.rows;
      return next();
    }
  });
};
