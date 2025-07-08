// Lista de palavras
const palavrasEscrita = ["gato", "sol", "casa", "livro", "mesa", "caneta", "carro", "porta"];

let palavraAtualEscrita = "";

// Elementos DOM
const entradaEscrita = document.getElementById("entradaUsuario");
const resultadoEscrita = document.getElementById("resultado");
const modeloPalavra = document.getElementById("palavraModelo");

// Função para carregar nova palavra
function novaPalavra() {
  if (palavrasEscrita.length === 0) {
    modeloPalavra.textContent = "🎉";
    resultadoEscrita.textContent = "Você terminou todas as palavras!";
    return;
  }

  const indexAleatorio = Math.floor(Math.random() * palavrasEscrita.length);
  palavraAtualEscrita = palavrasEscrita.splice(indexAleatorio, 1)[0];

  modeloPalavra.textContent = palavraAtualEscrita;
  entradaEscrita.value = "";
  entradaEscrita.focus();
  resultadoEscrita.textContent = "";
}

// Inicia ao carregar a página
window.addEventListener("load", () => {
  console.log("Página carregada");
  novaPalavra();
});

// Função verificar resposta
function verificarResposta() {
  const resposta = entradaEscrita.value.trim().toLowerCase();

  if (!resposta) {
    resultadoEscrita.textContent = "⚠️ Digite algo antes de verificar!";
    resultadoEscrita.style.color = "orange";
    return;
  }

  if (resposta === palavraAtualEscrita) {
    resultadoEscrita.textContent = "✅ Correto! Muito bem!";
    resultadoEscrita.style.color = "green";
    setTimeout(novaPalavra, 1000);
  } else {
    resultadoEscrita.textContent = `❌ Errado! Era: ${palavraAtualEscrita}`;
    resultadoEscrita.style.color = "red";
  }
}