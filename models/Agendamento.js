const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    tipoCorte: { type: String, required: true },
    dataHora: { type: Date, required: true }
});

module.exports = mongoose.model('Agendamento', agendamentoSchema);
