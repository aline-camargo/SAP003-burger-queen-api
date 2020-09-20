'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Extra_Menus', {
      menu_item_id: {
        type: Sequelize.INTEGER,
        references: {model:'Menu', key:'menu_item_id'}
      },
      extra_id: {
        type: Sequelize.INTEGER,
        references: {model:'Extras', key:'extra_id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Extra_Menus');
  }
};