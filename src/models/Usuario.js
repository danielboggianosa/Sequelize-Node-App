'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    correo: DataTypes.STRING,
    imagen: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
    Usuario.hasMany(models.Proyecto)
    Usuario.hasMany(models.Equipo)
    Usuario.hasMany(models.Tarea)
  };
  return Usuario;
};