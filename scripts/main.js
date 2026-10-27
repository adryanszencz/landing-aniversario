// Contagem regressiva até o próximo 01 de outubro, às 9h
function proximoEvento() {
    const agora = new Date();
    let evento = new Date(agora.getFullYear(), 9, 1, 9, 0, 0); // mês 9 = outubro

    // Se o evento deste ano já terminou, conta para o do ano que vem
    const fimDoEvento = new Date(agora.getFullYear(), 9, 1, 18, 0, 0);
    if (agora > fimDoEvento) {
        evento = new Date(agora.getFullYear() + 1, 9, 1, 9, 0, 0);
    }

    return evento;
}

const dataEvento = proximoEvento();

function atualizarContador() {
    const diferenca = dataEvento - new Date();
    const contador = document.getElementById('contador');

    if (diferenca <= 0) {
        contador.innerHTML = '<p class="contador__aovivo">O evento está acontecendo agora!</p>';
        return;
    }

    const segundosTotais = Math.floor(diferenca / 1000);
    const dias = Math.floor(segundosTotais / 86400);
    const horas = Math.floor((segundosTotais % 86400) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
}

atualizarContador();
setInterval(atualizarContador, 1000);

// Formulário de inscrição
const form = document.getElementById('form-inscricao');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    mensagem.hidden = false;
    form.reset();
});
