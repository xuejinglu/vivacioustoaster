const Sequelize = require('sequelize');
const db = new Sequelize('tripsApp', null, null, {
  dialect: 'postgres',
  define: {
    underscored: true,
  },
  storage: './server/config/tripsApp',
});

module.exports = db;
