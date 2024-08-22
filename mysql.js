const { Sequelize } = require('sequelize');

// Criação da instância do Sequelize
const sequelize = new Sequelize('agendamento-barbearia', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false // Desabilita logs SQL no console
});

// Testa a conexão
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado ao MySQL com Sequelize');
    } catch (error) {
        console.error('Não foi possível conectar ao MySQL:', error);
    }
})();

module.exports = sequelize;
