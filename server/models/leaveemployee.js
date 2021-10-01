"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LeaveEmployee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LeaveEmployee.init(
    {
      leave_id: {
        type: DataTypes.NUMBER,
      },
      employee_id: {
        type: DataTypes.NUMBER,
      },
    },
    {
      sequelize,
      modelName: "LeaveEmployee",
    }
  );
  return LeaveEmployee;
};
