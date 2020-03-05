'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estado = sequelize.define('Estado', {
    nombre: DataTypes.STRING
  }, {});
  Estado.associate = function(models) {
    // associations can be defined here
    Estado.belongsToMany(models.Proyecto, {through: 'proyectos_estados', foreignKey: 'estado', otherKey: 'proyecto'})
    Estado.belongsToMany(models.Tarea, {through: 'tareas_estados', foreignKey: 'estado', otherKey: 'tarea'})
  };
  return Estado;
};