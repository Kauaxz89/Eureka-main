
    const palavras = [
      "Gato", "Internacional", "Inconstitucionalissimamente", "Grêmio",
      "Músculo", "Paralelepípedo", "Estudo", "Lápis", "Sol", "Casa",
      "Livro", "Mesa", "Caneta", "Carro", "Porta", "Cachorro", "Roblox",
      "Barbie", "Boneca", "Futebol", "Computador", "Fortnite", "Barcelona"
    ];
    let palavraAtual = "";
    let pontos = 0;

    const modelo = document.getElementById("palavraModelo");
    const entrada = document.getElementById("entradaUsuario");
    const resultado = document.getElementById("resultado");
    const pontosDisplay = document.getElementById("pontos");

    function novaPalavra() {
      if (palavras.length === 0) {
        modelo.textContent = "🎉";
        resultado.innerHTML = "Parabéns! Você terminou todas as palavras!";
        return;
      }
      const idx = Math.floor(Math.random() * palavras.length);
      palavraAtual = palavras.splice(idx, 1)[0];
      modelo.textContent = palavraAtual;
      entrada.value = "";
      entrada.focus();
      resultado.textContent = "";
    }

    function voltarParaInicio() {
  window.location.href = "index.html"; // Substitua com a URL desejada
}

    function verificarResposta() {
      const resposta = entrada.value.trim().toLowerCase();
      if (!resposta) {
        resultado.innerHTML = "⚠️ Digite algo antes de verificar!";
        resultado.style.color = "orange";
        return;
      }
      if (resposta === palavraAtual.toLowerCase()) {
        resultado.innerHTML = "🎉 Correto! Muito bem!";
        resultado.style.color = "#4caf50";
        pontos++;
        pontosDisplay.textContent = pontos;
        setTimeout(novaPalavra, 1000);
      } else {
        resultado.innerHTML = `❌ Errado! Era: ${palavraAtual}`;
        resultado.style.color = "#e74c3c";
      }
    }

    window.onload = () => {
      pontos = 0;
      pontosDisplay.textContent = pontos;
      novaPalavra();
    };

    document.getElementById("entradaUsuario").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    verificarResposta();
  }
});

  