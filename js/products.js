var linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = '../style/products.css';
document.head.appendChild(linkElement);

const products = [
    {
      id: 1,
      image: "https://i.postimg.cc/qvRwVbyD/product1.jpg",
      name: "Smart-Watch",
      desc: "Its the best smartwatch on the market right now ",
      price: 5000,
      quantity: 1,
    },
    {
      id: 2,
      image: "https://i.postimg.cc/2yyM54tC/product2.webp",
      name: "Microsoft Surface",
      desc: "the microsoft surface is the pinnacle of at home/business laptop use",
      price: 20000,
      quantity: 2,
    },
    {
      id: 3,
      image:
        "https://i.postimg.cc/Gh2mskxW/product3.jpg",
      name: "Bose QuietComfort 35 Series II",
      desc: "Has world class noise cancelling technology years ahead of its time",
      price: 3800,
      quantity: 3,
    },
    {
      id: 4,
      image:
        "https://i.postimg.cc/9Xq4f3C6/produc4.jpg",
      name: "Anker 737 Power Bank",
      desc: "Currently the best in field when it comes to power banks",
      price: 3000,
      quantity: 4,
    },
    {
      id: 5,
      image:
        "https://i.postimg.cc/gcxnSxjF/product5.jpg",
      name: "Venom FerroFluid Magnetic Fluid Gaming Bluetooth Speaker",
      desc: "The most innovative bluetooth speaker on the market",
      price: 5400,
      quantity: 5,
    },
    {
      id: 6,
      image: "https://i.postimg.cc/3NfVW3Vz/product6.jpg",
      name: "49' Samsung Odyssey G9",
      desc: "The best monitor you can get for your money",
      price: 25000,
      quantity: 6,
    },
  ];
  
  function displayProducts() {
    const ourProducts = document.getElementById("products");
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.innerHTML = `
          <img id="photo" src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <p> R ${product.price}</p>        
          <button onclick="addToCart(${product.id})" >Add to cart</button>`;
      ourProducts.appendChild(productElement);
    });
  }
  
  let cart = JSON.parse(localStorage.getItem('data')) || [];
  
  function addToCart(productId) {
    const cartContainer = document.getElementById("cart-container");
    const product = products.find((product) => product.id === productId);
  
    if (product && product.quantity > 0) {
      cart.push(product);
      product.quantity--;
      updateCart();
      
    }
    setItems();
  }
  
  function updateCart() {
      const cartContainer = document.getElementById("cart-container");
      cartContainer.innerHTML = "";
  
      cart.forEach(product => {
          const cartItem = document.createElement("div")
          cartItem.innerHTML = `<span>${product.name}</span>
          <span>R${product.price}</span>
          `
          cartContainer.appendChild(cartItem)
      }) 
  }
  
  displayProducts();
  

function setItems() {
    const cartContainer = document.getElementById("cart-container");
    localStorage.setItem("data", JSON.stringify(cart))
    console.log(cart)
}

function showTask() {
    const cartContainer = document.getElementById("cart-container");
    cart.forEach(item => {
      cartContainer.innerHTML += `
        <span>${item.name}</span><br>
        <span>R
        ${item.price}</span><br>
      `
    })
}
  
  
showTask();