'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('proyectos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      inicio: {
        type: Sequelize.DATE
      },
      final: {
        type: Sequelize.DATE
      },
      tiempo: {
        type: Sequelize.TIME
      },
      fecha: {
        type: Sequelize.DATE
      },
      horas: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      responsable: {
        type: Sequelize.INTEGER
      },
      equipo:{
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('proyectos');
  }
};