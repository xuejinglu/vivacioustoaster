const Sequelize = require('sequelize');
const db = new Sequelize('trips', null, null, {
  dialect: 'postgres',
  define: {
    underscored: true,
  },
  storage: './server/config/trips',
});

module.exports = db;
