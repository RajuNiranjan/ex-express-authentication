const { constants } = require("../constants.js");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROT:
      res.send({
        tittle: "valodation failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.send({
        tittle: "not found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.send({
        tittle: "unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORVIDDEN:
      res.send({
        tittle: "forvidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.send({
        tittle: "server error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      console.log("no error, all good!");
      break;
  }
};

module.exports = errorHandler;
