const sessionController = {};

sessionController.verify = (req, res, next) => {
  req.session.boardId =
  next();
}

module.exports = sessionController;