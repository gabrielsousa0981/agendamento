const { DataTypes } = require('sequelize');
const sequelize = require('../mysql'); // Certifique-se de que o caminho para o arquivo de configuração do Sequelize está correto

const TipoCorte = sequelize.define('TipoCorte', {
    tipoCorte: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tipocortes', // Nome da tabela no banco de dados
    timestamps: false // Se a tabela não tem colunas de timestamps (createdAt, updatedAt)
});

module.exports = TipoCorte;
