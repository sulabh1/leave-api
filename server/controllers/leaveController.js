const { Leave, Employee, LeaveEmployee } = require("../models");
const { asyncCatcher } = require("../middleware");
const CRUDService = require("../services/CRUDServices");
const { AppError } = require("../provider");

exports.createLeave = asyncCatcher(async (req, res, next) => {
  const { leaveName, leaveReason, days } = req.body;
  const leave = await new CRUDService(Leave).create({
    leaveName,
    leaveReason,
    days,
  });
  res.status(200).json({
    status: "success",
    leave,
  });
});
exports.getAllLeave = asyncCatcher(async (req, res, next) => {
  const leave = await Leave.findAll({
    include: [{ model: Employee }],
  });
  if (!leave.employee) {
    return next(new AppError("No one is in leave", 400));
  }
  res.status(200).json({
    status: "success",
    leave,
  });
});
exports.createEmployee = asyncCatcher(async (req, res, next) => {
  //const { name, department } = req.body;
  const employee = await new CRUDService(Employee).create({
    name: req.body.name,
    department: req.body.department,
  });

  res.status(200).json({
    status: "success",
    employee,
  });
});
exports.createEmployeeLeave = asyncCatcher(async (req, res, next) => {
  const employeeInLeave = await new CRUDService(LeaveEmployee).create({
    leave_id: req.body.leave_id,
    employee_id: req.body.employee_id,
  });
  res.status(200).json({
    status: "success",
    employeeInLeave,
  });
});
