function abrirModal() {
  document.getElementById("modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function enviarMensagem() {
  const texto = document.getElementById("mensagem").value.trim();
  if (!texto) {
    alert("Digite uma mensagem antes de enviar.");
    return;
  }
  const numero = "5524999522320"; // <- coloque o número do WhatsApp com DDD aqui
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
  fecharModal();
}

function abrirMapa() {
  document.getElementById("modalMapa").style.display = "block";
}

function fecharMapa() {
  document.getElementById("modalMapa").style.display = "none";
}

// Fechar modal clicando fora dele
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  const modalMapa = document.getElementById("modalMapa");

  if (event.target === modal) {
    fecharModal();
  }
  if (event.target === modalMapa) {
    fecharMapa();
  }
};

let imagensCardapio = ["pag1.png", "pag2.png"];
let indiceAtual = 0;

function abrirCardapio() {
  document.getElementById("modalCardapio").style.display = "block";
  mostrarImagem(indiceAtual);
}

function fecharCardapio() {
  document.getElementById("modalCardapio").style.display = "none";
}

function mostrarImagem(indice) {
  const img = document.getElementById("cardapioImagem");
  img.src = imagensCardapio[indice];
  
  // Atualiza bolinhas
  document.querySelectorAll(".bolinha").forEach((b, i) => {
    b.classList.toggle("active", i === indice);
  });
}

function irParaImagem(indice) {
  indiceAtual = indice;
  mostrarImagem(indiceAtual);
}

// Suporte a gesto de arrastar no celular
let startX = 0;
document.getElementById("cardapioImagem").addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
document.getElementById("cardapioImagem").addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) irParaImagem((indiceAtual + 1) % imagensCardapio.length);
  if (endX - startX > 50) irParaImagem((indiceAtual - 1 + imagensCardapio.length) % imagensCardapio.length);
});

// Fechar clicando fora
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  const modalMapa = document.getElementById("modalMapa");
  const modalCardapio = document.getElementById("modalCardapio");

  if (event.target === modal) fecharModal();
  if (event.target === modalMapa) fecharMapa();
  if (event.target === modalCardapio) fecharCardapio();
};
