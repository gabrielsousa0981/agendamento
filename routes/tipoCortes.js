const express = require('express');
const router = express.Router();
const TipoCorte = require('../models/TipoCorte');

// Listar tipos de corte (omitindo createdAt e updatedAt)
router.get('/', async (req, res) => {
    try {
        const tiposCorte = await TipoCorte.find().select('-createdAt -updatedAt'); // Omite os campos
        res.json(tiposCorte);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao obter tipos de corte.' });
    }
});

module.exports = router;
