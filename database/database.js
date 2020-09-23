const Sequelize = require('sequelize');
const connection = new Sequelize(<Nome do Banco de Dados>, <Usuario>, <senha>, {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = connection;