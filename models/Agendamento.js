const { DataTypes } = require('sequelize');
const sequelize = require('../mysql'); // Atualize o caminho se necessário
const TipoCorte = require('./TipoCorte'); // Atualize o caminho se necessário

const Agendamento = sequelize.define('Agendamento', {
    nomeCliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoCorte_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TipoCorte, // Referência ao modelo TipoCorte
            key: 'id' // Chave primária da tabela 'TipoCortes'
        }
    },
    dataHora: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'agendamentos', // Nome da tabela no banco de dados
    timestamps: false // Se a tabela não tem colunas de timestamps
});

// Definir a associação
Agendamento.belongsTo(TipoCorte, { foreignKey: 'tipoCorte_id', as: 'TipoCorte' });

module.exports = Agendamento;
