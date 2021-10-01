"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Leave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Employee }) {
      // define association here
      this.belongsToMany(Employee, {
        through: "LeaveEmployee",
        foreignKey: "employee_id",
      });
    }
  }
  Leave.init(
    {
      leaveName: {
        type: DataTypes.ENUM({
          values: ["sick leave", "paid leave", "urgent leave", "unpaid leave"],
        }),
        allowNull: false,
      },
      leaveReason: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      days: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Leave",
    }
  );
  return Leave;
};
