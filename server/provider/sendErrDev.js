const sendErrDev = (err, res) => {
  console.log(err.statusCode);
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
};
module.exports = sendErrDev;
