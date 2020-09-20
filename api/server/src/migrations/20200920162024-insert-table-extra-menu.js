'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Extra_Menus', [
      {
        menu_item_id: 25,
        extra_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        menu_item_id: 25,
        extra_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        menu_item_id: 26,
        extra_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        menu_item_id: 26,
        extra_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Extra_Menus', {
      menu_item_id: {
        [Sequelize.Op.in]: [25, 26]
      }
    }, {});
  }
};
