'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flavours_Menu = sequelize.define('Flavours_Menu', {
    menu_item_id: DataTypes.INTEGER,
    flavour_id: DataTypes.INTEGER
  }, {});
  Flavours_Menu.associate = function(models) {
    Order.hasMany(models.Flavour);
    Order.hasMany(models.Menu);
  };
  return Flavours_Menu;
};