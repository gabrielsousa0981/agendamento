document.addEventListener('DOMContentLoaded', () => {
    const agendamentoForm = document.getElementById('agendamento-form');
    const mensagemDiv = document.getElementById('mensagem');
    const loader = document.getElementById('loader');
    const tipoCorteSelect = document.getElementById('tipoCorte');

    // Função para carregar tipos de corte
    async function carregarTiposCorte() {
        try {
            const response = await fetch('/tipoCortes');
            if (!response.ok) throw new Error('Erro ao buscar tipos de corte');
            
            const tiposCorte = await response.json();
            tiposCorte.forEach(tipoCorte => {
                const option = document.createElement('option');
                option.value = tipoCorte.id;
                option.textContent = tipoCorte.tipoCorte;
                tipoCorteSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Erro ao carregar tipos de corte:', error);
        }
    }

    // Função para enviar o formulário
    async function enviarFormulario(event) {
        event.preventDefault();

        const nomeCliente = document.getElementById('nomeCliente').value;
        const tipoCorteId = document.getElementById('tipoCorte').value;
        const dataHora = document.getElementById('dataHora').value;

        console.log('Dados do formulário:', { nomeCliente, tipoCorteId, dataHora }); // Adiciona log dos dados do formulário

        try {
            loader.style.display = 'block'; // Mostrar o loader enquanto a solicitação é processada

            const response = await fetch('/agendamentos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nomeCliente, tipoCorte_id: tipoCorteId, dataHora })
            });

            if (!response.ok) throw new Error('Erro ao criar agendamento');

            const resultado = await response.json();
            console.log('Resposta do servidor:', resultado); // Adiciona log da resposta do servidor
            mensagemDiv.textContent = 'Agendamento realizado com sucesso!';
            agendamentoForm.reset();
        } catch (error) {
            console.error('Erro:', error);
            mensagemDiv.textContent = 'Erro ao realizar o agendamento.';
        } finally {
            loader.style.display = 'none'; // Ocultar o loader após a solicitação ser processada
        }
    }

    // Carregar os tipos de corte ao carregar a página
    carregarTiposCorte();

    // Adicionar o listener de submit ao formulário
    agendamentoForm.addEventListener('submit', enviarFormulario);
});
