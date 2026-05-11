/**
 * PARDAL ENSINO BÁSICO KIDS - SCRIPT OFICIAL
 * Funcionalidades: Som Web Audio, Dark Mode com troca de texto, Loader e Interação.
 */

// --- 1. CONFIGURAÇÃO DE SOM (Web Audio API) ---
// Gera um som amigável sem precisar de arquivos externos .mp3
function tocarSomInterativo() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = "sine"; // Som suave
    oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); // Nota Dó
    oscillator.frequency.exponentialRampToValueAtTime(
      880,
      audioCtx.currentTime + 0.1,
    ); // Sobe para Lá

    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.0001,
      audioCtx.currentTime + 0.2,
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.2);
  } catch (e) {
    console.warn("Áudio aguardando clique do usuário para ativar.");
  }
}

// --- 2. DARK MODE COM ALTERNÂNCIA DE TEXTO ---
function configurarDarkMode() {
  const btn = document.getElementById("darkModeBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const estaNoDarkMode = document.body.classList.toggle("dark-mode");
    tocarSomInterativo();

    // Atualiza ícone e texto dinamicamente
    if (estaNoDarkMode) {
      btn.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
    } else {
      btn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
    }
  });
}

// --- 3. CONTROLE DO LOADER (TELA DE CARREGAMENTO) ---
function configurarLoader() {
  const loader = document.getElementById("loader");
  if (loader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => (loader.style.display = "none"), 500);
      }, 1000);
    });
  }
}

// --- 4. EVENTOS DE CLIQUE GLOBAIS (SONS) ---
function configurarSonsGlobais() {
  document.addEventListener("click", (event) => {
    // Toca som se clicar em botões de PDF, links do menu ou botão dark mode
    const alvo = event.target.closest(".pdf-btn, nav a, .dark-btn");
    if (alvo) {
      tocarSomInterativo();
    }
  });
}

// --- INICIALIZAÇÃO DE TODAS AS FUNÇÕES ---
document.addEventListener("DOMContentLoaded", () => {
  configurarDarkMode();
  configurarLoader();
  configurarSonsGlobais();
});
