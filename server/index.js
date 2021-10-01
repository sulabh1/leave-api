const express = require("express");
const http = require("http");

const { globalMiddleware } = require("./middleware");
const { AppError } = require("./provider");
const { leaveRoutes } = require("./routes");
const { sequelize } = require("./models");
const dotenv = require("dotenv").config();

const app = express();
console.log(process.env.NODE_ENV);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "development") {
  app.use(require("morgan")("dev"));
}
app.use(require("compression")());

app.use("/api/v1/employee", leaveRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find this ${req.originalUrl} in this server`));
});
app.use(globalMiddleware);
const port = process.env.PORT || 4040;

const server = http.createServer(app);
server.listen(port, () => {
  sequelize.authenticate().then(() => {
    console.log(`db connection successful`);
  });
  console.log(`listening to the port ${port}`);
});
