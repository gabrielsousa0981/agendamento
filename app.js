const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const agendamentosRouter = require('./routes/agendamentos');
const tipoCortesRouter = require('./routes/tipoCortes'); // Corrigido para tipoCortes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing de JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usar os roteadores
app.use('/agendamentos', agendamentosRouter);
app.use('/tipoCortes', tipoCortesRouter); // Corrigido para tipoCortes

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/agendamento-barbearia', {
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
