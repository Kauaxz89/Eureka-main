// Função para inicializar o jogo de pintar
function iniciarPintar() {
    const canvas = document.getElementById('canvas-pintar');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let corAtual = '#ff0000';

    // Definir cor selecionada pelo usuário
    document.getElementById('cor').addEventListener('input', function (e) {
        corAtual = e.target.value;
    });

    // Eventos de mouse para pintar
    canvas.addEventListener('mousedown', () => (isDrawing = true));
    canvas.addEventListener('mouseup', () => (isDrawing = false));
    canvas.addEventListener('mousemove', desenhar);

    function desenhar(e) {
        if (!isDrawing) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.fillStyle = corAtual;
        ctx.fillRect(x, y, 10, 10); // Tamanho do pincel
    }
}

// Função para limpar o canvas
function limparCanvas() {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Função para voltar à página inicial
function fecharJogo() {
    window.location.href = 'index.html';
}

// Inicialização automática dependendo da página
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('pintar.html')) {
        iniciarPintar();
    } else if (window.location.pathname.includes('desenhar.html')) {
        iniciarDesenhar();
    } else if (window.location.pathname.includes('escrever.html')) {
        iniciarEscrita();
    }
});

// Função para inicializar o jogo de desenhar
function iniciarDesenhar() {
    const canvas = document.getElementById('canvas-desenhar');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let espessuraLinha = 5;

    // Definir espessura da linha pelo controle deslizante
    document.getElementById('linha').addEventListener('input', function (e) {
        espessuraLinha = e.target.value;
    });

    // Eventos de mouse para desenhar
    canvas.addEventListener('mousedown', () => (isDrawing = true));
    canvas.addEventListener('mouseup', () => (isDrawing = false));
    canvas.addEventListener('mousemove', desenhar);

    function desenhar(e) {
        if (!isDrawing) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.lineWidth = espessuraLinha;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000000';

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    // Iniciar um novo caminho ao abrir
    ctx.beginPath();
}

// Função para inicializar o jogo de treino de escrita
function iniciarEscrita() {
    const canvas = document.getElementById('canvas-escrita');
    const ctx = canvas.getContext('2d');

    // Adicionar funcionalidades específicas para treino de escrita aqui
    console.log('Treino de escrita iniciado!');
}