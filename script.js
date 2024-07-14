async function fetchBooks() {
  const response = await fetch('https://script.google.com/macros/s/AKfycbxnyxBxx6mHJMSdh1H85UL4NHR574Xrmc6XMbWbVPWfLSdVZekRZA2_eb2wv164C2Gn/exec');
  const books = await response.json();
  const booksDiv = document.getElementById('books-list');
  books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <h4>by ${book.author}</h4>
      <img src="${book.image}" alt="${book.title}">
      <p>${book.description}</p>
    `;
    booksDiv.appendChild(bookDiv);
  });
}

document.addEventListener('DOMContentLoaded', fetchBooks);