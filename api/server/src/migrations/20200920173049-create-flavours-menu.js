'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Flavours_Menu', {
      menu_item_id: {
        type: Sequelize.INTEGER,
        references: {model:'Menu', key:'menu_item_id'}
      },
      flavour_id: {
        type: Sequelize.INTEGER,
        references: {model:'Flavours', key:'flavour_id'}
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
    return queryInterface.dropTable('Flavours_Menu');
  }
};