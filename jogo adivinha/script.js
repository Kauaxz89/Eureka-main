function checkGuess() {
  const input = document.getElementById("guess").value.trim().toLowerCase();
  const result = document.getElementById("result");
  const img = document.getElementById("character-shadow");

  const correctAnswer = "pikachu"; // Mude para o personagem desejado

  if (input === correctAnswer) {
    result.textContent = "Parabéns! Você acertou, é o Pikachu!";
    img.src = "pikachu.png"; // Imagem colorida
    img.style.filter = "none";
  } else {
    result.textContent = "Tente novamente!";
  }
}
