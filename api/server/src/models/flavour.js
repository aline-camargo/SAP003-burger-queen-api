'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flavour = sequelize.define('Flavour', {
    flavour_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Flavour.associate = function(models) {
    // associations can be defined here
  };
  return Flavour;
};