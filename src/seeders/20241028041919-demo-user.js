'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'Tan',
        lastName: 'Quoc',
        email: 'myminer007@Gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
  },
  down:async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
