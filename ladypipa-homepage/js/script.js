const sliderContainer = document.querySelector('.slider-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentPosition = 0; // Posición inicial del slider
const imageWidth = 200 + 20; // Ancho de cada imagen (200px) + margen (20px, ajusta según tu CSS)
const totalImages = sliderContainer.children.length; // Total de imágenes

nextBtn.addEventListener('click', () => {
  if (currentPosition > -(imageWidth * (totalImages - 5))) {
    // Avanza a la derecha, pero no más allá de las imágenes disponibles
    currentPosition -= imageWidth;
    sliderContainer.style.transform = `translateX(${currentPosition}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentPosition < 0) {
    // Retrocede a la izquierda, pero no más allá de la posición inicial
    currentPosition += imageWidth;
    sliderContainer.style.transform = `translateX(${currentPosition}px)`;
  }
});
