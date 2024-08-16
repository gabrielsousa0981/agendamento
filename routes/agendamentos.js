const express = require('express');
const router = express.Router();
const Agendamento = require('../models/Agendamento');

// Criar um novo agendamento
router.post('/', async (req, res) => {
    try {
        const { nomeCliente, tipoCorte, dataHora } = req.body;

        if (!nomeCliente || !tipoCorte || !dataHora) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
        }

        const novoAgendamento = new Agendamento({ nomeCliente, tipoCorte, dataHora });
        await novoAgendamento.save();

        res.status(201).json(novoAgendamento);
    } catch (err) {
        res.status(400).json({ message: `Erro ao criar agendamento: ${err.message}` });
    }
});

module.exports = router;
