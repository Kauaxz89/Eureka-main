
    window.onload = function () {
      const characters = [
        {
          name: "pikachu",
          shadow: "img/adivinhaçao-img/pikachu.jpg",
          color: "img/adivinhaçao-img/pikachu-colorido.png"
        },
        {
          name: "goku",
          shadow: "img/adivinhaçao-img/son-goku.png",
          color: "img/adivinhaçao-img/DBZ-Goku-PNG-colorido.png"
        },
        {
          name: "steve",
          shadow: "img/adivinhaçao-img/Baby-Steve-3D.webp",
          color: "img/adivinhaçao-img/steve.webp"
        },
        {
          name: "ben 10",
          shadow: "img/adivinhaçao-img/ben 10.jpg",
          color: "img/adivinhaçao-img/ben10.avif"
        },
        {
          name: "barbie",
          shadow: "img/adivinhaçao-img/barbie.png",
          color: "img/adivinhaçao-img/animada.gif"
        },
        {
          name: "scooby doo",
          shadow: "img/adivinhaçao-img/scoby.jpg",
          color: "img/adivinhaçao-img/cachorro.jpg"
        }
      ];

      let idx = 0;
      const img = document.getElementById("character-img");
      const input = document.getElementById("guess");
      const res = document.getElementById("result");
      const btn = document.getElementById("btn");

      function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

      function showCharacter() {
        const c = characters[idx];
        img.src = c.shadow;
        img.style.filter = "grayscale(100%) brightness(40%)";
        res.textContent = "";
        input.value = "";
        input.focus();
        btn.disabled = false;

        img.onerror = () => {
          img.src = "https://via.placeholder.com/300?text=Imagem+Indisponível";
          res.textContent = "⚠️ Imagem não disponível.";
        };
      }

      function checkGuess() {
        const guess = input.value.trim().toLowerCase();
        const correct = characters[idx].name.toLowerCase();

        if (guess === correct) {
          img.src = characters[idx].color;
          img.style.filter = "none";
          res.textContent = `✅ Acertou! É ${capitalize(correct)}!`;
          btn.disabled = true;

          setTimeout(() => {
            idx++;
            if (idx < characters.length) {
              showCharacter();
            } else {
              res.textContent = "🎉 Parabéns! Você acertou todos!";
              img.style.display = input.style.display = btn.style.display = "none";
            }
          }, 1500);
        } else {
          res.textContent = guess === ""
            ? "🤔 Digite um nome para tentar!"
            : "❌ Tente novamente!";
          img.src = characters[idx].shadow;
          img.style.filter = "grayscale(100%) brightness(40%)";
        }
      }

      btn.onclick = checkGuess;
      showCharacter();
    };