function criarCarrossel(carouselElement, prevButton, nextButton) {
  let scrollPosition = 0;

  prevButton.addEventListener('click', () => {
    scrollPosition -= carouselElement.offsetWidth - 50;
    if (scrollPosition < 0) {
      scrollPosition = 0;
    }
    carouselElement.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  });

  nextButton.addEventListener('click', () => {
    scrollPosition += carouselElement.offsetWidth - 50;
    if (scrollPosition > carouselElement.scrollWidth - carouselElement.offsetWidth) {
      scrollPosition = carouselElement.scrollWidth - carouselElement.offsetWidth;
    }
    carouselElement.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  });
}

const carouselFilmes = document.querySelector('.carousel-filmes');
const prevBtnFilmes = document.getElementById('prevBtnFilmes');
const nextBtnFilmes = document.getElementById('nextBtnFilmes');
criarCarrossel(carouselFilmes, prevBtnFilmes, nextBtnFilmes);

const carouselDesenho = document.querySelector('.carousel-desenho');
const prevBtnDesenho = document.getElementById('prevBtnDesenho');
const nextBtnDesenho = document.getElementById('nextBtnDesenho');
criarCarrossel(carouselDesenho, prevBtnDesenho, nextBtnDesenho);

const carouselVariedades = document.querySelector('.carousel-variedades');
const prevBtnVariedades = document.getElementById('prevBtnVariedades');
const nextBtnVariedades = document.getElementById('nextBtnVariedades');
criarCarrossel(carouselVariedades, prevBtnVariedades, nextBtnVariedades);

const carouselEsportes = document.querySelector('.carousel-esportes');
const prevBtnEsportes = document.getElementById('prevBtnEsportes');
const nextBtnEsportes = document.getElementById('nextBtnEsportes');
criarCarrossel(carouselEsportes, prevBtnEsportes, nextBtnEsportes);
