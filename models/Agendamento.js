const mongoose = require('mongoose');

const AgendamentoSchema = new mongoose.Schema({
    nomeCliente: { type: String, required: true },
    tipoCorte: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoCorte', required: true }, // Usando ObjectId para referência
    dataHora: { type: Date, required: true }
}, { timestamps: false }); // Desativa os timestamps

const Agendamento = mongoose.model('Agendamento', AgendamentoSchema);

module.exports = Agendamento;
