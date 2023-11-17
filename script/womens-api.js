fetch('https://fakestoreapi.com/products/category/women%27s%20clothing')
  .then(response => response.json())
  .then(mensClothing => {
    console.log(mensClothing); // Process the retrieved men's clothing products here
  })
  .catch(error => {
    console.error('Error fetching men\'s clothing:', error);
  });

fetch('https://fakestoreapi.com/products/category/women%27s%20clothing')
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
            title.classList.add('product-title'); // adds class 'product-title'

            const price = document.createElement('p'); // product price
            price.textContent = `$${product.price}`;
            price.classList.add('price'); // adds class 'price'

            // Creating a 'buy' button
            const buyButton = document.createElement('button');
            buyButton.textContent = 'Buy now';
            buyButton.classList.add('buy-button');

            // Append image, title, price and button to the product card
            // appendChild is used to append (or add) an HTML element as a child to another element in the DOM
            productCard.appendChild(image);
            productCard.appendChild(title);
            productCard.appendChild(price);
            productCard.appendChild(buyButton);

            // Append the product card to the product list container
            productList.appendChild(productCard);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
