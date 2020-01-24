'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order_Itens = sequelize.define('Order_Itens', {
    product_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    status_item: DataTypes.STRING
  }, {});
  Order_Itens.associate = function(models) {
    // associations can be defined here
  };
  return Order_Itens;
};