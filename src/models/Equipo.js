'use strict';
module.exports = (sequelize, DataTypes) => {
  const Equipo = sequelize.define('Equipo', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    imagen: DataTypes.STRING
  }, {});
  Equipo.associate = function(models) {
    // associations can be defined here
    Equipo.belongsTo(models.Usuario, {foreignKey:'lider'})
    Equipo.belongsToMany(models.Usuario,{trough: 'equipos_usuarios', foreignKey:'equipo', otherKey:'usuario'})
    Equipo.hasMany(models.Proyecto)
  };
  return Equipo;
};