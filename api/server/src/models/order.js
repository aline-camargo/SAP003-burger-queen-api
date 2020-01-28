'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    TableId: DataTypes.INTEGER,
    status_order: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    Order.hasMany(models.Order_Itens);
    Order.belongsTo(models.Table);
    // Order.hasOne(models.Table);
  };
  return Order;
};