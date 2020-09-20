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

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Flavours', null, {});
  }
};
