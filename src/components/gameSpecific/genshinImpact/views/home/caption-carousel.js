let currentSlide = 0;
const slides = document.querySelectorAll('.caption-main-banner-content-events-a, .caption-main-banner-content-events-b, .caption-main-banner-content-events-c, .caption-main-banner-content-events-d, .caption-main-banner-content-events-e'); // Adicione aqui todas as divs de conteúdo
const indicators = document.querySelectorAll('.caption-main-banner-carousel-indicator-events');

function showSlide(n) {
    // Esconde todos os slides
    slides.forEach(slide => {
        slide.classList.add('hidden');
    });
    
    // Remove a classe active de todos os indicadores
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });

    // Mostra o slide atual e ativa o indicador correspondente
    slides[n].classList.remove('hidden');
    indicators[n].classList.add('active');
}

// Adiciona evento de clique para cada indicador
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Função para avançar para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Função para voltar ao slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Inicia o carrossel automático
setInterval(nextSlide, 8000);

// Inicializa o primeiro slide
showSlide(0);