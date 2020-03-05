'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tarea = sequelize.define('Tarea', {
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    inicio: DataTypes.DATE,
    final: DataTypes.DATE,
    tiempo: DataTypes.TIME,
    duracion: DataTypes.TIME
  }, {});
  Tarea.associate = function(models) {
    // associations can be defined here
    Tarea.belongsTo(models.Poyecto, {foreignKey:'proyecto'})
    Tarea.belongsTo(models.Usuario, {foreignKey:'creador'})
    Tarea.belongsToMany(models.Tarea, {through: 'tareas_subtareas', foreignKey: 'tarea', otherKey: 'subtarea'});
  };
  return Tarea;
};