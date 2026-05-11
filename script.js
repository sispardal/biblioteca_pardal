// --- 1. FUNÇÃO DE SOM ---
function tocarSom() {
    try {
        const context = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = context.createOscillator();
        const gainNode = context.createGain();

        oscillator.type = 'sine'; 
        oscillator.frequency.setValueAtTime(523.25, context.currentTime); 
        oscillator.frequency.exponentialRampToValueAtTime(880, context.currentTime + 0.1); 

        gainNode.gain.setValueAtTime(0.05, context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.2);

        oscillator.connect(gainNode);
        gainNode.connect(context.destination);

        oscillator.start();
        oscillator.stop(context.currentTime + 0.2);
    } catch (e) {
        console.log("Áudio aguardando interação do usuário.");
    }
}

// --- 2. DARK MODE (CORRIGIDO) ---
const darkModeBtn = document.getElementById('darkModeBtn');
if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        tocarSom(); // Toca o som ao alternar
        
        // Opcional: Trocar o ícone do botão
        const icon = darkModeBtn.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });
}

// --- 3. LOADER ---
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    }
});

// --- 4. SONS NOS BOTÕES E LINKS ---
document.addEventListener('click', (e) => {
    // Verifica se clicou em um botão de PDF ou link da NAV
    if (e.target.closest('.pdf-btn') || e.target.closest('nav a')) {
        tocarSom();
    }
});