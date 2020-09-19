'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menu', [
      {
        name: 'Água 500ml',
        price: 5,
        is_breakfast: false,
        has_flavour: false,
        has_extras: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Café com leite',
        price: 7,
        is_breakfast: true,
        has_flavour: false,
        has_extras: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface) => {  
    return queryInterface.bulkDelete('Menu', null, {});
  }
};
