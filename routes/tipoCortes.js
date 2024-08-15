const express = require('express');
const router = express.Router();
const TipoCorte = require('../models/TipoCorte');

// Criar um novo tipo de corte
router.post('/', async (req, res) => {
    try {
        const { nome } = req.body;
        const tipoCorte = new TipoCorte({ nome });
        await tipoCorte.save();
        res.status(201).json(tipoCorte);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Obter todos os tipos de corte
router.get('/', async (req, res) => {
    try {
        const tipoCortes = await TipoCorte.find();
        res.status(200).json(tipoCortes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
