// Controle de Tamanho de Fonte
let currentFontSize = 100; // Porcentagem padrão
const rootElement = document.documentElement;

document.getElementById('btn-font-increase').addEventListener('click', () => {
    if (currentFontSize < 130) {
        currentFontSize += 10;
        rootElement.style.fontSize = `${currentFontSize}%`;
    }
});

document.getElementById('btn-font-decrease').addEventListener('click', () => {
    if (currentFontSize > 80) {
        currentFontSize -= 10;
        rootElement.style.fontSize = `${currentFontSize}%`;
    }
});

// Controle de Alto Contraste
const btnContrast = document.getElementById('btn-contrast');
btnContrast.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// Rolagem Suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});