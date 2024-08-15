const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/agendamento-barbearia', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'tela_agendamento')));

// Configurar rotas
const agendamentosRouter = require('./routes/agendamentos');
const tipoCortesRouter = require('./routes/tipoCortes');
app.use('/agendamentos', agendamentosRouter);
app.use('/tipoCortes', tipoCortesRouter);

// Rota para a raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'tela_agendamento', 'tela.html'));
});

// Inicializar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
