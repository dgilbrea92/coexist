//database stuff
const db = require('../db/models');
const queries = require('../db/queries');

const BoardController = {};

BoardController.getStickies = (req, res, next) => {
  db.query({ text: queries.getStickies, values: [req.params.id] })
    .then(result => {
      res.locals.stickies = result.rows;
      return next();
    })
    .catch(err => {
      next({
        log: 'Error in middleware BoardController.getStickies',
      });
    });
};

BoardController.postSticky = (req, res, next) => {
  db.query({
    text: queries.addSticky,
    values: [req.body.name, req.body.boardId],
  })
    .then(result => {
      console.log('query results', result.rows);
      res.locals.stickyId = result.rows[0];
      return next();
    })
    .catch(err => {
      next({
        log: 'Error in middleware BoardController.postStickies' + err,
      });
    });
};

BoardController.updateSticky = (req, res, next) => {
  db.query({
    text: queries.editSticky,
    values: [req.body.name, req.body.sticky_id],
  })
    .then(result => {
      res.locals.sticky = result.rows[0];
      return next();
    })
    .catch(err => {
      next({
        log: 'Error in middleware BoardController.postStickies' + err,
      });
    });
};

BoardController.deleteSticky = (req, res, next) => {
  db.query({
    text: queries.deleteSticky,
    values: [req.body.sticky_id],
  })
    .then(result => {
      return next();
    })
    .catch(err => {
      next({
        log: 'Error in middleware BoardController.postStickies' + err,
      });
    });
};

BoardController.addStickyItem = (req, res, next) => {
  const { itemId, stickyId, content, additional, complete } = req.body;
  db.query({
    text: queries.addStickyItem,
    values: [itemId, stickyId, content, additional, complete],
  })
    .then(result => {
      console.log('success', result.rows);
      return next();
    })
    .catch(err => {
      next({
        log: 'Error in middleware BoardController.addStickyItem' + err,
      });
    });
};

module.exports = BoardController;
