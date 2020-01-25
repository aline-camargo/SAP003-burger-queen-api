'use strict';
module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Table', {
    number: DataTypes.INTEGER
  }, {});
  Table.associate = (models) => {
    Table.hasMany(models.Order);
  };
  return Table;
};