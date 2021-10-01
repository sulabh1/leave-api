"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Leaves", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      leaveName: {
        type: Sequelize.ENUM({
          values: ["sick leave", "paid leave", "urgent leave", "unpaid leave"],
        }),
        allowNull: false,
      },
      leaveReason: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      days: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Leaves");
  },
};
