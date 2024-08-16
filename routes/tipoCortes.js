const express = require('express');
const router = express.Router();
const TipoCorte = require('../models/TipoCorte');

// Obter todos os tipos de corte
router.get('/', async (req, res) => {
    try {
        const tiposCorte = await TipoCorte.find();
        res.json(tiposCorte);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao obter tipos de corte.' });
    }
});

module.exports = router;
