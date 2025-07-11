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

function carregarMolde(src) {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 100, 50, 400, 300); // ajuste de posição e escala
    };
    img.src = src;
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

window.onload = () => {
    iniciarDesenhar();
};

function iniciarDesenhar() {
    const canvas = document.getElementById('canvas-desenhar');
    const ctx = canvas.getContext('2d');
    const linhaRange = document.getElementById('linha');
    const borrachaBtn = document.getElementById('borracha-btn');
const corInput = document.getElementById('cor');
let corAtual = corInput.value;

// Atualiza a cor sempre que o input muda
corInput.addEventListener('input', (e) => {
    corAtual = e.target.value;
});


    let isDrawing = false;
    let usarBorracha = false;
    let espessuraLinha = parseInt(linhaRange.value);

    // 🎚️ Atualiza espessura
    linhaRange.addEventListener('input', (e) => {
        espessuraLinha = parseInt(e.target.value);
    });

    // 🔀 Alterna entre lápis e borracha
    borrachaBtn.addEventListener('click', () => {
        usarBorracha = !usarBorracha;
        borrachaBtn.textContent = usarBorracha ? '🖊️ Modo Lápis' : '🧽 Modo Borracha';
        canvas.style.cursor = usarBorracha ? 'not-allowed' : 'crosshair';
    });

    // 🧹 Limpar canvas
    window.limparCanvas = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
    };

    // 🖌️ Começa desenho
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.beginPath();
        ctx.moveTo(x, y);
    });

    // ✋ Termina desenho
    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
        ctx.beginPath();
    });

    // ✏️ Continua desenhando
    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.lineWidth = espessuraLinha;
        ctx.lineCap = 'round';
if (usarBorracha) {
    ctx.globalCompositeOperation = 'destination-out'; // apaga
    ctx.strokeStyle = 'rgba(0,0,0,1)'; // cor irrelevante ao apagar
} else {
    ctx.globalCompositeOperation = 'source-over'; // desenha
    ctx.strokeStyle = corAtual; // usa cor selecionada
}


        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    });
}

    // Iniciar um novo caminho ao abrir
    ctx.beginPath();


// Função para inicializar o jogo de treino de escrita
function iniciarEscrita() {
    const canvas = document.getElementById('canvas-escrita');
    const ctx = canvas.getContext('2d');

    // Adicionar funcionalidades específicas para treino de escrita aqui
    console.log('Treino de escrita iniciado!');
}
