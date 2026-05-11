// --- FUNÇÃO PARA GERAR SOM VIA CÓDIGO ---
function tocarSom() {
  const context = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();

  oscillator.type = "sine"; // Som suave tipo flauta
  oscillator.frequency.setValueAtTime(523.25, context.currentTime); // Nota Dó
  oscillator.frequency.exponentialRampToValueAtTime(
    880,
    context.currentTime + 0.1,
  ); // Sobe para Lá

  gainNode.gain.setValueAtTime(0.1, context.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.2);

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  oscillator.start();
  oscillator.stop(context.currentTime + 0.2);
}

// --- DARK MODE ---
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  tocarSom(); // Toca som ao mudar o modo
});

// --- LOADER ---
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});

// --- SONS NOS BOTÕES DOS LIVROS ---
const botoesPdf = document.querySelectorAll(".pdf-btn");
botoesPdf.forEach((botao) => {
  botao.addEventListener("click", () => {
    tocarSom();
  });
});

// --- SONS NOS LINKS DA NAV ---
const linksNav = document.querySelectorAll("nav a");
linksNav.forEach((link) => {
  link.addEventListener("click", () => {
    tocarSom();
  });
});
