'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Order_Itens', 'ProductId', 'product_id');
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Order_Itens', 'product_id', 'ProductId');
  }
};
