
// Test til at se om produkterne kom frem i console
// fetch('https://fakestoreapi.com/products')
//  .then(response => response.json())
//  .then(data => {
//    console.log(data); // Process the retrieved data here
//  })
//  .catch(error => {
//    console.error('Error fetching data:', error);
//  });

  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    const productList = document.getElementById('product-list');

    // Create product cards dynamically based on the fetched data
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product'); // adds class 'product'

      const image = document.createElement('img'); // product picture
      image.src = product.image;
      image.alt = product.title;

      const title = document.createElement('h4'); // product title
      title.textContent = product.title;

      const price = document.createElement('p'); // product price
      price.textContent = `$${product.price}`;
      price.classList.add('price'); // adds class 'price'

    // const buyBtn = document.createElement('button');
    // buyBtn.textContent = 'Buy now';
    //  buy.classList.add('buy-btn');

      // Append image, title, and price to the product card
      productCard.appendChild(image);
      productCard.appendChild(title);
      productCard.appendChild(price);
    //  productCard.appendChild(button);

      // Append the product card to the product list container
      productList.appendChild(productCard);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
