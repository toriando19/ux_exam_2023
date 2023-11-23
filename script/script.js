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
if(typeof(Storage) !== 'undefined'){
  console.log('storage is working')
}else{
  console.log('storage is not working on your browser');
}

// Add to cart
function addToCart(productId) {
  const products = JSON.parse(localStorage.getItem('cart')) || [];
  console.log('Added to cart');
  alert('Product is added to cart')

  // Check if the product is already in the cart
  const existingProduct = products.find(item => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    const productToAdd = { id: productId, quantity: 1 };
    products.push(productToAdd);
  }

  localStorage.setItem('cart', JSON.stringify(products));
  displayCart();
}

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
          <div class="cart-product">
            <img src="${product.image}" alt="${product.title}" class="cart-img">
            <h4 class="cart-title">${product.title}</h4>
            <p>$${product.price} <br> Quantity: ${item.quantity}</p>
            <span class="material-symbols-outlined delete">delete</span>          
          </div>
        `;

        cartItemsContainer.appendChild(cartItem);
      });
  });
}

// Display cart on page load
displayCart();