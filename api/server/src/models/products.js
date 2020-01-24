'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    itens: DataTypes.STRING,
    price: DataTypes.INTEGER,
    is_alcoholic: DataTypes.BOOLEAN
  }, {});
  Product.associate = (models) => {
    Product.hasMany(models.Order_Itens);
  };
  return Product;
};
