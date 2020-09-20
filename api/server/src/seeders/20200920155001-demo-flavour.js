'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Flavours', [
      {
        name: 'Vegetariano',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bovino',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Frango',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flavours', {
      name: {
        [Sequelize.Op.in]: [
          'Vegetariano',
          'Bovino',
          'Frango'
        ]
      }
    }, {});  }
};
