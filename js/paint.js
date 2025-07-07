// Seleciona o canvas e o contexto 2D
const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');

// Variável para armazenar a cor selecionada
let selectedColor = '#ff0000';

// Define a cor inicial no canvas (branco)
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Função para obter a cor de um pixel específico
function getPixelColor(x, y) {
  const imageData = ctx.getImageData(x, y, 1, 1).data;
  return `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;
}

// Algoritmo de floodFill (preenchimento recursivo)
function floodFill(x, y, targetColor, fillColor) {
  const currentColor = getPixelColor(x, y);

  // Verifica se o pixel atual já tem a cor de destino ou não é a cor alvo
  if (currentColor === fillColor || currentColor !== targetColor) {
    return;
  }

  // Preenche o pixel atual
  ctx.fillStyle = fillColor;
  ctx.fillRect(x, y, 1, 1);

  // Chama recursivamente para os pixels adjacentes
  floodFill(x + 1, y, targetColor, fillColor);
  floodFill(x - 1, y, targetColor, fillColor);
  floodFill(x, y + 1, targetColor, fillColor);
  floodFill(x, y - 1, targetColor, fillColor);
}

// Evento de clique no canvas
canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor(event.clientX - rect.left);
  const y = Math.floor(event.clientY - rect.top);

  const targetColor = getPixelColor(x, y);
  floodFill(x, y, targetColor, selectedColor);
});

// Atualiza a cor selecionada quando o usuário escolhe uma nova cor
document.getElementById('colorPicker').addEventListener('input', (event) => {
  selectedColor = event.target.value;
});