const express = require('express');
const router = express.Router();
const Agendamento = require('../models/Agendamento');

// Criar um novo agendamento
router.post('/', async (req, res) => {
    try {
        const { nome, tipoCorte, dataHora } = req.body;
        const agendamento = new Agendamento({ nome, tipoCorte, dataHora });
        await agendamento.save();
        res.status(201).json(agendamento);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Obter todos os agendamentos
router.get('/', async (req, res) => {
    try {
        const agendamentos = await Agendamento.find();
        res.status(200).json(agendamentos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
