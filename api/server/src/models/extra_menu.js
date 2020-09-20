'use strict';
module.exports = (sequelize, DataTypes) => {
  const Extra_Menu = sequelize.define('Extra_Menu', {
    menu_item_id: DataTypes.INTEGER,
    extra_id: DataTypes.INTEGER
  }, {});
  Extra_Menu.associate = function(models) {
    Order.hasMany(models.Extra);
    Order.hasMany(models.Menu);
  };
  return Extra_Menu;
};