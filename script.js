document.addEventListener('DOMContentLoaded', () => {
  const bookImages = [
    "https://i.imgur.com/BjlKrAG.png",
    "https://i.imgur.com/K9V6ag7.png",
    "https://i.imgur.com/bm26eZ1.png",
    "https://i.imgur.com/w6YTtKf.png",
    "https://i.imgur.com/h6Lau9k.png",
    "https://i.imgur.com/JBGIA6b.png",
    "https://i.imgur.com/rAHTpRc.png"
  ];

  const astrologyImages = [
    "https://i.imgur.com/B11YtW1.png",
    "https://i.imgur.com/s1OqQZA.png",
    "https://i.imgur.com/1KJgE81.png",
    "https://i.imgur.com/EEQfM57.png",
    "https://i.imgur.com/Fgt43RF.png",
    "https://i.imgur.com/aeMdG0b.png",
    "https://i.imgur.com/SKF3h12.png",
    "https://i.imgur.com/ofHkv5P.png",
    "https://i.imgur.com/CjWzIyY.png",
    "https://i.imgur.com/RMVfj0Z.png",
    "https://i.imgur.com/zg1RwP4.png",
    "https://i.imgur.com/cuTcJtb.png"
  ];

  // Initialize slider for book images
  let currentBookSlide = 0;

  function showBookSlide(index) {
    const slides = document.querySelectorAll('.book-slide');
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
  }

  function nextBookSlide() {
    currentBookSlide = (currentBookSlide + 1) % bookImages.length;
    showBookSlide(currentBookSlide);
  }

  const bookSliderDiv = document.getElementById('book-slider');
  bookImages.forEach((img, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('book-slide');
    slideDiv.innerHTML = `
      <img src="${img}" alt="Book Cover ${index + 1}">
    `;
    bookSliderDiv.appendChild(slideDiv);
  });

  showBookSlide(currentBookSlide);
  setInterval(nextBookSlide, 3000); // Change slide every 3 seconds

  // Initialize slider for astrology images
  let currentAstroSlide = 0;

  function showAstroSlide(index) {
    const slides = document.querySelectorAll('.astrology-slide');
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
  }

  function nextAstroSlide() {
    currentAstroSlide = (currentAstroSlide + 1) % astrologyImages.length;
    showAstroSlide(currentAstroSlide);
  }

  function prevAstroSlide() {
    currentAstroSlide = (currentAstroSlide - 1 + astrologyImages.length) % astrologyImages.length;
    showAstroSlide(currentAstroSlide);
  }

  const astrologyDiv = document.getElementById('astrology-list');
  astrologyImages.forEach((img, index) => {
    const astroDiv = document.createElement('div');
    astroDiv.classList.add('astrology-slide');
    astroDiv.innerHTML = `
      <img src="${img}" alt="Astrology Image ${index + 1}">
    `;
    astrologyDiv.appendChild(astroDiv);
  });

  document.getElementById('nextSlide').addEventListener('click', nextAstroSlide);
  document.getElementById('prevSlide').addEventListener('click', prevAstroSlide);

  showAstroSlide(currentAstroSlide);
  setInterval(nextAstroSlide, 3000); // Change slide every 3 seconds
});