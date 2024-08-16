// scripts.js
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Carregar tipos de corte do backend
        const response = await fetch('/tipoCortes');
        const tiposCorte = await response.json();
        
        const tipoCorteSelect = document.getElementById('tipoCorte');
        
        tiposCorte.forEach(tipo => {
            const option = document.createElement('option');
            option.value = tipo._id; // Usar o ID do tipo de corte
            option.textContent = tipo.tipoCorte; // Mostrar o nome do tipo de corte
            tipoCorteSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar tipos de corte:', error);
    }
});

document.getElementById('agendamento-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch('/agendamentos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById('mensagem').textContent = 'Agendamento realizado com sucesso!';
            document.getElementById('mensagem').style.color = 'green';
            event.target.reset(); // Limpa o formulário após o envio
        } else {
            throw new Error('Erro ao agendar');
        }
    } catch (error) {
        document.getElementById('mensagem').textContent = 'Erro ao realizar o agendamento.';
        document.getElementById('mensagem').style.color = 'red';
        console.error('Erro:', error);
    }
});
