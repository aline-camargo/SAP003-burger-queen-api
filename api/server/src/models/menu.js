'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    menu_item_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    is_breakfast: DataTypes.BOOLEAN,
    has_flavour: DataTypes.BOOLEAN,
    has_extras: DataTypes.BOOLEAN
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
  };
  return Menu;
};