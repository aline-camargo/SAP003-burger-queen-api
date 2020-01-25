'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order_Itens = sequelize.define('Order_Itens', {
    ProductId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER,
    status_item: DataTypes.STRING
  }, {});
  Order_Itens.associate = function(models) {
    // associations can be defined here
  };
  return Order_Itens; 
};