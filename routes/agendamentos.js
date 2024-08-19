const express = require('express');
const router = express.Router();
const Agendamento = require('../models/Agendamento');

// Criar um novo agendamento
router.post('/', async (req, res) => {
    const { nomeCliente, tipoCorte, dataHora } = req.body;
    
    try {
        const agendamento = new Agendamento({
            nomeCliente,
            tipoCorte,
            dataHora
        });

        await agendamento.save();
        res.status(201).json(agendamento);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao criar agendamento.' });
    }
});

module.exports = router;
