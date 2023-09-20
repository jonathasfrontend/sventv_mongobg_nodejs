const carouselFilmes = document.querySelector('.carousel-filmes');
const prevBtnFilmes = document.getElementById('prevBtnFilmes');
const nextBtnFilmes = document.getElementById('nextBtnFilmes');

prevBtnFilmes.addEventListener('click', () => {
  carouselFilmes.scrollLeft -= (carouselFilmes.offsetWidth - 50)
});
nextBtnFilmes.addEventListener('click', () => {
  carouselFilmes.scrollLeft += (carouselFilmes.offsetWidth - 50)
});

const carouselDesenho = document.querySelector('.carousel-desenho');
const prevBtnDesenho = document.getElementById('prevBtnDesenho');
const nextBtnDesenho = document.getElementById('nextBtnDesenho');

prevBtnDesenho.addEventListener('click', () => {
  carouselDesenho.scrollLeft -= (carouselDesenho.offsetWidth - 50)
});
nextBtnDesenho.addEventListener('click', () => {
  carouselDesenho.scrollLeft += (carouselDesenho.offsetWidth - 50)
});

const carouselVariedades = document.querySelector('.carousel-variedades');
const prevBtnVariedades = document.getElementById('prevBtnVariedades');
const nextBtnVariedades = document.getElementById('nextBtnVariedades');

prevBtnVariedades.addEventListener('click', () => {
  carouselVariedades.scrollLeft -= (carouselVariedades.offsetWidth - 50)
});
nextBtnVariedades.addEventListener('click', () => {
  carouselVariedades.scrollLeft += (carouselVariedades.offsetWidth - 50)
});

const carouselEsportes = document.querySelector('.carousel-esportes');
const prevBtnEsportes = document.getElementById('prevBtnEsportes');
const nextBtnEsportes = document.getElementById('nextBtnEsportes');

prevBtnEsportes.addEventListener('click', () => {
  carouselEsportes.scrollLeft -= (carouselEsportes.offsetWidth - 50)
});
nextBtnEsportes.addEventListener('click', () => {
  carouselEsportes.scrollLeft += (carouselEsportes.offsetWidth - 50)
});