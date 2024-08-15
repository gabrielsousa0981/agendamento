const mongoose = require('mongoose');

const tipoCorteSchema = new mongoose.Schema({
    nome: { type: String, required: true }
});

module.exports = mongoose.model('TipoCorte', tipoCorteSchema);
