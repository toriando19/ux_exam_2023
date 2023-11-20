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

// Function to handle adding a product to the cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
      existingProduct.quantity++;
  } else {
      cart.push({ id: product.id, title: product.title, price: product.price, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartList = document.getElementById('cart-items');

  cartList.innerHTML = ''; // Clear the cart display

  cartItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `Product: ${item.title}, Quantity: ${item.quantity}`;
      cartList.appendChild(listItem);
  });
}

// Initial update of cart display
updateCartDisplay();