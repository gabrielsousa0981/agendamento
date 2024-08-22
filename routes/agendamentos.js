const express = require('express');
const router = express.Router();
const Agendamento = require('../models/Agendamento'); // Atualize o caminho se necessário
const TipoCorte = require('../models/TipoCorte'); // Atualize o caminho se necessário

// Rota para criar um agendamento
router.post('/', async (req, res) => {
    const { nomeCliente, tipoCorte_id, dataHora } = req.body;
    try {
        const agendamento = await Agendamento.create({ nomeCliente, tipoCorte_id, dataHora });
        res.json(agendamento);
    } catch (error) {
        console.error('Erro ao criar agendamento:', error);
        res.status(500).json({ message: 'Erro ao criar agendamento.' });
    }
});

// Rota para obter todos os agendamentos
router.get('/', async (req, res) => {
    try {
        const agendamentos = await Agendamento.findAll({
            include: {
                model: TipoCorte, // Inclui o tipo de corte relacionado
                as: 'TipoCorte' // Alias usado na associação
            }
        });
        res.json(agendamentos);
    } catch (error) {
        console.error('Erro ao obter agendamentos:', error);
        res.status(500).json({ message: 'Erro ao obter agendamentos.' });
    }
});

module.exports = router;
