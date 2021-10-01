"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Leave }) {
      // define association here
      this.belongsToMany(Leave, {
        through: "LeaveEmployee",
        foreignKey: "leave_id",
      });
    }
  }
  Employee.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department: { type: DataTypes.STRING, allowNull: false },
      role: {
        type: DataTypes.ENUM({ values: ["employee", "admin"] }),
        defaultValue: "employee",
      },
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  return Employee;
};
