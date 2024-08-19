const mongoose = require('mongoose');

const TipoCorteSchema = new mongoose.Schema({
    tipoCorte: { type: String, required: true }
}, { timestamps: false });

const TipoCorte = mongoose.model('TipoCorte', TipoCorteSchema);

module.exports = TipoCorte;
