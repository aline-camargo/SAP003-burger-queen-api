'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Flavours_Menu', [
      {
        menu_item_id: 25,
        flavour_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        menu_item_id: 25,
        flavour_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        menu_item_id: 25,
        flavour_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        menu_item_id: 26,
        flavour_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        menu_item_id: 26,
        flavour_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        menu_item_id: 26,
        flavour_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flavours_Menu', {
      menu_item_id: {
        [Sequelize.Op.in]: [25, 26]
      }
    }, {});
  }
};
