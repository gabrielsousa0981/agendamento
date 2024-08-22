const express = require('express');
const router = express.Router();
const TipoCorte = require('../models/TipoCorte');

// Rota para obter todos os tipos de corte
router.get('/', async (req, res) => {
    try {
        const tiposCorte = await TipoCorte.findAll();
        res.json(tiposCorte);
    } catch (error) {
        console.error('Erro ao obter tipos de corte:', error);
        res.status(500).json({ message: 'Erro ao obter tipos de corte.' });
    }
});

module.exports = router;
