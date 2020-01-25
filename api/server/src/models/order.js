'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    TableId: DataTypes.INTEGER,
    status_order: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    Order.hasMany(models.Order_Itens);
  };
  return Order;
};