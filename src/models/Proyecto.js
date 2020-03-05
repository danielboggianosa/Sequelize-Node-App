'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proyecto = sequelize.define('Proyecto', {
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    inicio: DataTypes.DATE,
    final: DataTypes.DATE,
    tiempo: DataTypes.TIME,
    fecha: DataTypes.DATE,
    horas: DataTypes.INTEGER
  }, {});
  Proyecto.associate = function(models) {
    // associations can be defined here
    Proyecto.hasMany(models.Tarea)
    Proyecto.belongsTo(models.Usuario, {foreignKey: 'responsable'})
    Proyecto.belongsTo(models.Equipo, {foreignKey: 'equipo'})
  };
  return Proyecto;
};