const express = require('express');
const router = express.Router();
const Agendamento = require('../models/Agendamento');

// Rota para listar todos os agendamentos
router.get('/', async (req, res) => {
    try {
        const agendamentos = await Agendamento.find().populate('tipoCorte');
        res.json(agendamentos);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao obter agendamentos.' });
    }
});

// Rota para criar um novo agendamento
router.post('/', async (req, res) => {
    const { nomeCliente, tipoCorte, dataHora } = req.body;
    
    try {
        const agendamento = new Agendamento({ nomeCliente, tipoCorte, dataHora });
        await agendamento.save();
        res.status(201).json(agendamento);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao criar agendamento.' });
    }
});

module.exports = router;
