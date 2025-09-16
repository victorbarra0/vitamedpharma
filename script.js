// Aumentar / diminuir fonte
let tamanhoFonte = 100;
document.getElementById("aumentar-fonte").addEventListener("click", () => {
  tamanhoFonte += 10;
  document.body.style.fontSize = tamanhoFonte + "%";
});
document.getElementById("diminuir-fonte").addEventListener("click", () => {
  tamanhoFonte -= 10;
  if (tamanhoFonte < 70) tamanhoFonte = 70;
  document.body.style.fontSize = tamanhoFonte + "%";
});

// Alto contraste
document.getElementById("contraste").addEventListener("click", () => {
  document.body.classList.toggle("alto-contraste");
});

// Voltar ao topo
document.getElementById("voltar-topo").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Menu Mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navegacao");

menuToggle.addEventListener("click", () => {
  console.log("clique detectado");

  nav.classList.toggle("active");
});
