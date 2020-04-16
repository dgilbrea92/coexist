const sessionController = {};

sessionController.verify = (req, res, next) => {
  console.log(req.session);
  next();
}

module.exports = sessionController;