// Initialize Stripe
const stripe = Stripe('pk_live_51Jg4iDFHmzmMEexQybICE2HBSyn48G9Q7R23klfOD4ZSyYhmluPnViqutRRT8YWKDalyZGsiCiuhfKtYFCyLt6RQ00OrXciAKe'); // Replace with your publishable key

// Handle checkout for each book
const checkoutButton1 = document.getElementById('checkout-button-book1');
checkoutButton1.addEventListener('click', function() {
  fetch('/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: [
        { id: 'book1', quantity: 1 },
      ],
    }),
  })
  .then(res => {
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  })
  .then(({ url }) => {
    window.location = url
  })
  .catch(e => {
    console.error(e.error)
  })
});
