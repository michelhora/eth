module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      private_key: {
        type: Sequelize.STRING(5048),
        allowNull: false,
      },
      qr_code: {
        type: Sequelize.STRING(5048),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async queryInterface => {
    return queryInterface.dropTable('users');
  },
};
