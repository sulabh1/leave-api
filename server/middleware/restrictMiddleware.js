const { AppError } = require("../provider");
const { CRUDService } = require("../services");
const { Employee } = require("../models");
const { asyncCatcher } = require(".");

const restrictMiddleware = asyncCatcher((req, res, next) => {
  const employee = await new CRUDService(Employee).get();
  next();
});
module.exports = restrictMiddleware;
