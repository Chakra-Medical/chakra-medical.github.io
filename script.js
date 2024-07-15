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

  const booksDiv = document.getElementById('books-list');
  bookImages.forEach((img, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h3>Book Title ${index + 1}</h3>
      <h4>by Chakra Medical</h4>
      <img src="${img}" alt="Book Cover ${index + 1}">
      <p>Book description for book ${index + 1}.</p>
    `;
    booksDiv.appendChild(bookDiv);
  });

  // Initialize slider for astrology images
  let currentSlide = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll('.astrology-slide');
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % astrologyImages.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + astrologyImages.length) % astrologyImages.length;
    showSlide(currentSlide);
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

  document.getElementById('nextSlide').addEventListener('click', nextSlide);
  document.getElementById('prevSlide').addEventListener('click', prevSlide);

  showSlide(currentSlide);
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});