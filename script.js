document.addEventListener('DOMContentLoaded', () => {
  const images = [
    "https://i.imgur.com/BjlKrAG.png",
    "https://i.imgur.com/K9V6ag7.png",
    "https://i.imgur.com/bm26eZ1.png",
    "https://i.imgur.com/w6YTtKf.png",
    "https://i.imgur.com/h6Lau9k.png",
    "https://i.imgur.com/JBGIA6b.png",
    "https://i.imgur.com/rAHTpRc.png",
    "https://i.imgur.com/awxPHQO.jpg",
    "https://i.imgur.com/dtnSewG.jpg",
    "https://i.imgur.com/cxnKBP2.jpg",
    "https://i.imgur.com/5hKdtQV.jpg",
    "https://i.imgur.com/XYDx6Ob.jpg",
    "https://i.imgur.com/GWmowje.png",
    "https://i.imgur.com/YDuI4am.png"
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
  images.forEach((img, index) => {
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

  const astrologyDiv = document.getElementById('astrology-list');
  astrologyImages.forEach((img, index) => {
    const astroDiv = document.createElement('div');
    astroDiv.classList.add('astro');
    astroDiv.innerHTML = `
      <h3>Astrology Image ${index + 1}</h3>
      <img src="${img}" alt="Astrology Image ${index + 1}">
    `;
    astrologyDiv.appendChild(astroDiv);
  });
});