'use strict';
module.exports = (sequelize, DataTypes) => {
  const Extra = sequelize.define('Extra', {
    extra_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Extra.associate = function(models) {
    // associations can be defined here
  };
  return Extra;
};