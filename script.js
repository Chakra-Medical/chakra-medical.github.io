// Initialize Stripe

const SERVER_URL = 'https://script.google.com/macros/s/AKfycbxnyxBxx6mHJMSdh1H85UL4NHR574Xrmc6XMbWbVPWfLSdVZekRZA2_eb2wv164C2Gn/exec'; // Your provided Apps Script web app URL

async function createBookElement(isbn) {
  try {
    const response = await fetch(`${SERVER_URL}?isbn=${isbn}`);
    const bookData = await response.json();

    if (bookData) {
      const bookList = document.getElementById('book-list');
      const bookElement = document.createElement('div');
      bookElement.classList.add('product');
      bookElement.innerHTML = `
          <img src="${bookData.coverUrl}" alt="${bookData.title}">
          <h2>${bookData.title}</h2>
          <p>by ${bookData.author}</p>
          <p>${bookData.description}</p>
          <button onclick="handleCheckout('${bookData.priceId}')">Buy Now</button>
      `;
      bookList.appendChild(bookElement);
    } else {
      console.error(`Book not found for ISBN: ${isbn}`);
    }
  } catch (error) {
    console.error("Error fetching book data:", error);
  }
}

async function handleCheckout(priceId) {
    try {
      const response = await fetch(SERVER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `priceId=${priceId}`,
      });
  
      const { sessionId } = await response.json();
  
      const stripe = Stripe('pk_live_51Jg4iDFHmzmMEexQybICE2HBSyn48G9Q7R23klfOD4ZSyYhmluPnViqutRRT8YWKDalyZGsiCiuhfKtYFCyLt6RQ00OrXciAKe'); 
      await stripe.redirectToCheckout({
        sessionId,
        successUrl: `${window.location.origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/cancel.html`,
      });
    } catch (error) { 
      console.error("Error:", error); 
    }
  }

// (This function is only on success.html)
async function fetchOrderDetails(sessionId) {
  const response = await fetch(`${SERVER_URL}?session_id=${sessionId}`);
  const orderDetails = await response.json();
  document.getElementById('order-details').textContent = JSON.stringify(orderDetails, null, 2); // Pretty print JSON
}

// Call fetchOrderDetails on success.html
if (window.location.pathname === '/success.html') {
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get('session_id');
  if (sessionId) {
    fetchOrderDetails(sessionId);
  }
}

