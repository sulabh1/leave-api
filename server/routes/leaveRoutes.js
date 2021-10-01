const express = require("express");
const {
  createLeave,
  createEmployee,
  createEmployeeLeave,
  getAllLeave,
} = require("../controllers");

const { restrictMiddleware } = require("../middleware");
const router = express.Router();

router.post("/leave", createLeave);
router.get("/leave", restrictMiddleware, getAllLeave);
router.post("/", createEmployee);
router.post("/employeeinleave", createEmployeeLeave);

module.exports = router;
