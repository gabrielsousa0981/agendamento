document.addEventListener('DOMContentLoaded', () => {
    const tipoCorteSelect = document.getElementById('tipoCorte');
    const agendamentoForm = document.getElementById('agendamento-form');
    const mensagemDiv = document.getElementById('mensagem');

    // Função para carregar os tipos de corte
    async function carregarTiposDeCorte() {
        try {
            const response = await fetch('/tipoCortes');
            if (!response.ok) throw new Error('Erro ao carregar tipos de corte');
            
            const tiposCorte = await response.json();

            if (tiposCorte.length === 0) {
                tipoCorteSelect.innerHTML = '<option value="">Nenhum tipo de corte disponível</option>';
                return;
            }

            tipoCorteSelect.innerHTML = ''; // Limpa opções antigas

            tiposCorte.forEach(tipo => {
                const option = document.createElement('option');
                option.value = tipo._id; // Usa o ObjectId
                option.textContent = tipo.tipoCorte;
                tipoCorteSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Erro:', error);
            mensagemDiv.textContent = 'Não foi possível carregar os tipos de corte.';
        }
    }

    // Função para enviar o formulário
    async function enviarFormulario(event) {
        event.preventDefault();

        const nomeCliente = document.getElementById('nomeCliente').value;
        const tipoCorteId = document.getElementById('tipoCorte').value; // Usa o ObjectId
        const dataHora = document.getElementById('dataHora').value;

        try {
            const response = await fetch('/agendamentos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nomeCliente, tipoCorte: tipoCorteId, dataHora })
            });

            if (!response.ok) throw new Error('Erro ao criar agendamento');
            
            const resultado = await response.json();
            mensagemDiv.textContent = 'Agendamento realizado com sucesso!';
            agendamentoForm.reset();
        } catch (error) {
            console.error('Erro:', error);
            mensagemDiv.textContent = 'Erro ao realizar o agendamento.';
        }
    }

    // Carregar tipos de corte ao carregar a página
    carregarTiposDeCorte();

    // Adicionar evento de submissão ao formulário
    agendamentoForm.addEventListener('submit', enviarFormulario);
});
