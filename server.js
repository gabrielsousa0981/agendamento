const express = require('express');
const mongoose = require('mongoose');
const agendamentosRouter = require('./routes/agendamentos'); // Ajuste o caminho conforme necessário

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Usar o roteador de agendamentos
app.use('/agendamentos', agendamentosRouter);

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/nomeDoSeuBancoDeDados', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch(err => {
    console.error('Erro de conexão com o MongoDB:', err);
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
