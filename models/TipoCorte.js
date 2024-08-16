const mongoose = require('mongoose');

const tipoCorteSchema = new mongoose.Schema({
    tipoCorte: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('TipoCorte', tipoCorteSchema);
