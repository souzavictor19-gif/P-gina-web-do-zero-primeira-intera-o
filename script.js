// Lógica dos botões de curtir
const botoesCurtir = document.querySelectorAll(".btn-curtir");

botoesCurtir.forEach(function (botao) {
  let curtiu = false;

  botao.addEventListener("click", function () {
    const contador = botao.querySelector("span");
    let valorAtual = Number(contador.textContent);

    if (!curtiu) {
      contador.textContent = valorAtual + 1;
      curtiu = true;
      botao.classList.add("curtido");
    } else {
      contador.textContent = valorAtual - 1;
      curtiu = false;
      botao.classList.remove("curtido");
    }
  });
});

// Lógica do Modo Escuro
const botaoTema = document.getElementById("btn-tema");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    botaoTema.textContent = "☀️ Modo Claro";
  } else {
    botaoTema.textContent = "🌙 Modo Escuro";
  }
});
