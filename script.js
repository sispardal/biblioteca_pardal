/* ========================= */
/* LOADER */
/* ========================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 1200);
  }
});

/* ========================= */
/* DARK MODE */
/* ========================= */

const darkBtn = document.getElementById("darkModeBtn");

/* TEMA SALVO */

if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark");

  darkBtn.innerHTML = `
    <i class="fa-solid fa-sun"></i>
    Light Mode
  `;
}

/* ALTERAR TEMA */

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");

    darkBtn.innerHTML = `
      <i class="fa-solid fa-sun"></i>
      Light Mode
    `;
  } else {
    localStorage.setItem("tema", "light");

    darkBtn.innerHTML = `
      <i class="fa-solid fa-moon"></i>
      Dark Mode
    `;
  }
});

/* ========================= */
/* SOM NOS BOTÕES */
/* ========================= */

const botoesPdf = document.querySelectorAll(".pdf-btn");

botoesPdf.forEach((btn) => {
  btn.addEventListener("click", () => {
    const audio = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3",
    );

    audio.volume = 0.3;

    audio.play();
  });
});

/* ========================= */
/* SCROLL SUAVE */
/* ========================= */

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const destino = document.querySelector(link.getAttribute("href"));

    destino.scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* ========================= */
/* ANIMAÇÃO AO ROLAR */
/* ========================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0px)";
      }
    });
  },
  {
    threshold: 0.1,
  },
);

const cards = document.querySelectorAll(".materia");

cards.forEach((card) => {
  card.style.opacity = "0";

  card.style.transform = "translateY(30px)";

  observer.observe(card);
});

/* ========================= */
/* EFEITO NAVBAR */
/* ========================= */

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
  } else {
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
  }
});

/* ========================= */
/* DIGITAÇÃO HERO */
/* ========================= */

const heroTitle = document.querySelector(".hero h2");

const textoOriginal = heroTitle.innerText;

heroTitle.innerText = "";

let i = 0;

function digitar() {
  if (i < textoOriginal.length) {
    heroTitle.innerText += textoOriginal.charAt(i);

    i++;

    setTimeout(digitar, 70);
  }
}

window.addEventListener("load", () => {
  setTimeout(digitar, 1200);
});

/* ========================= */
/* BOTÃO VOLTAR TOPO */
/* ========================= */

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

/* ESTILO */

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#7b2cbf";
topBtn.style.color = "white";
topBtn.style.fontSize = "1.2rem";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";
topBtn.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";

/* MOSTRAR BOTÃO */

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

/* SUBIR */

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* ========================= */
/* LEITURA POR VOZ */
/* ========================= */

function falarTexto(texto) {
  const fala = new SpeechSynthesisUtterance(texto);

  fala.lang = "pt-BR";

  fala.rate = 1;

  fala.pitch = 1;

  speechSynthesis.speak(fala);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    falarTexto("Bem vindo ao Pardal Ensino Básico Kids");
  }, 2000);
});

/* ========================= */
/* CONTADOR VISITAS */
/* ========================= */

let visitas = localStorage.getItem("visitas");

if (!visitas) {
  visitas = 0;
}

visitas++;

localStorage.setItem("visitas", visitas);

console.log(`📚 Visitas: ${visitas}`);

/* ========================= */
/* FINAL */
/* ========================= */

console.log("🚀 Pardal Ensino Básico iniciado!");
