// Change header background color when scrolling
const header = document.getElementById('site-header');

document.addEventListener('scroll', function () {
  // Get the scroll position
  let scrollPos = window.pageYOffset;

  if (scrollPos > 100) {
    header.style.backgroundColor = "#E4F2FF"; // Gets blue when scrolling
  } else {
    header.style.backgroundColor = "transparent"; // Transparent when not scrolling
  }
});

// Accordion menu in footer
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Search bar visibility
function removeClass() {
  const searchContainer = document.getElementById('search-container');
  searchContainer.classList.remove('hidden'); // visible
}

function addClass() {
  const searchContainer = document.getElementById('search-container');
  searchContainer.classList.add('hidden'); // hidden
}


// SHOPPING CART //
function showCart() {
  const shoppingContainer = document.getElementById('shopping-container');
  shoppingContainer.classList.remove('hidden'); // visible
}

function hideCart() {
  const shoppingContainer = document.getElementById('shopping-container');
  shoppingContainer.classList.add('hidden'); // hidden
}

// Check if localStorage is working
if (typeof (Storage) !== 'undefined') {
  console.log('Storage is working')
} else {
  console.log('Storage is not working on your browser');
}

// Add to cart
function updateTotalQuantityDisplay() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const totalQuantity = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  const quantityDisplay = document.getElementById('quantity');
  quantityDisplay.textContent = totalQuantity;

  // Store total quantity in localStorage
  localStorage.setItem('totalQuantity', totalQuantity);
}

function addToCart(productId) {
  let products = JSON.parse(localStorage.getItem('cart')) || [];
  alert('Product is added to cart');
  console.log('Added to cart');

  const existingProduct = products.find(item => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity++;   // If existing product, add 1 to quantity in cart
  } else {
    const productToAdd = { id: productId, quantity: 1 }; // Else add product to cart
    products.push(productToAdd);
  }

  localStorage.setItem('cart', JSON.stringify(products));

  // Update total quantity display and store in localStorage
  updateTotalQuantityDisplay();

  displayCart();
}

// Update total quantity on page load
document.addEventListener('DOMContentLoaded', function() {
  updateTotalQuantityDisplay();
});


function displayCart() {
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = '';

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  cartItems.forEach(item => {
    // Fetch product details from Fake Store API based on item id
    fetch(`https://fakestoreapi.com/products/${item.id}`)
      .then(response => response.json())
      .then(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-popup');

        cartItem.innerHTML = `
          <div class="cart-product-popup">
            <img src="${product.image}" alt="${product.title}" class="cart-img-popup">
            <h4 class="cart-title-popup">${product.title}</h4>
            <p>$${product.price} <br> Quantity: ${item.quantity}</p>
            <button onclick="removeFromCart(${product.id})" id="remove-from-cart">🗑️</button>      
          </div>
        `;

        cartItemsContainer.appendChild(cartItem);
      });
  });
}

function removeFromCart(productId) {
  const products = JSON.parse(localStorage.getItem('cart')) || [];
  console.log('Removed from cart');
}

// Display cart on page load
displayCart();
