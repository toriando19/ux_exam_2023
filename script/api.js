fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Process the retrieved data here
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    const productList = document.getElementById('product-list');

    // Create product cards dynamically based on the fetched data
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product');

      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.title;

      const title = document.createElement('h3');
      title.textContent = product.title;

      const price = document.createElement('p');
      price.textContent = `$${product.price}`;

      // Append image, title, and price to the product card
      productCard.appendChild(image);
      productCard.appendChild(title);
      productCard.appendChild(price);

      // Append the product card to the product list container
      productList.appendChild(productCard);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
