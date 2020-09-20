'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Menu', [
      {
        name: 'Café americano',
        price: 5,
        is_breakfast: true,
        has_flavour: false,
        has_extras: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Suco de fruta natural',
        price: 7,
        is_breakfast: true,
        has_flavour: false,
        has_extras: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante 500ml',
        price: 7,
        is_breakfast: false,
        has_flavour: false,
        has_extras: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante 750ml',
        price: 10,
        is_breakfast: false,
        has_flavour: false,
        has_extras: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Água 750ml',
        price: 7,
        is_breakfast: false,
        has_flavour: false,
        has_extras: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Misto Quente',
        price: 10,
        is_breakfast: true,
        has_flavour: false,
        has_extras: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hambúrguer duplo',
        price: 15,
        is_breakfast: true,
        has_flavour: true,
        has_extras: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hambúrguer simples',
        price: 10,
        is_breakfast: false,
        has_flavour: true,
        has_extras: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Anéis de cebola',
        price: 5,
        is_breakfast: false,
        has_flavour: false,
        has_extras: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Batata frita',
        price: 5,
        is_breakfast: false,
        has_flavour: false,
        has_extras: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menu', {
      name: {
        [Sequelize.Op.in]: [
          'Café americano',
          'Suco de fruta natural',
          'Refrigerante 500ml',
          'Refrigerante 750ml',
          'Água 750ml',
          'Misto Quente',
          'Hambúrguer duplo',
          'Hambúrguer simples',
          'Anéis de cebola',
          'Batata frita'
        ]
      }
    }, {});
  }
};
