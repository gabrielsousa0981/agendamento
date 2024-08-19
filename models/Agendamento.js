const mongoose = require('mongoose');

const AgendamentoSchema = new mongoose.Schema({
    nomeCliente: { type: String, required: true },
    tipoCorte: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoCorte', required: true }, // Campo referencial
    dataHora: { type: Date, required: true }
}, { timestamps: false });

const Agendamento = mongoose.model('Agendamento', AgendamentoSchema);

module.exports = Agendamento;
