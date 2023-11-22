// Fetch data from Fake Store API
fetch('https://fakestoreapi.com/products/category/women%27s%20clothing')
.then(response => response.json())
.then(data => displayProducts(data));

function displayProducts(products) {
const productsContainer = document.getElementById('product-list');

products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product');

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h3 class="product-title">${product.title}</h3>
    <p class="price">$${product.price}</p>
    <button class="buy-button" onclick="addToCart(${product.id})">Add to Cart</button>
  `;

  productsContainer.appendChild(productCard);
});
}
