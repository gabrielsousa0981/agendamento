const express = require('express');
const path = require('path');
const tipoCortesRouter = require('./routes/tipoCortes');
const agendamentosRouter = require('./routes/agendamentos');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Servir arquivos estáticos da pasta 'tela_agendamento'
app.use(express.static(path.join(__dirname, 'tela_agendamento')));

// Usar os roteadores
app.use('/tipoCortes', tipoCortesRouter);
app.use('/agendamentos', agendamentosRouter);

// Rota raiz para servir o arquivo 'tela.html'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'tela_agendamento', 'tela.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
