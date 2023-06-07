var linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = '../style/products.css';
document.head.appendChild(linkElement);

const products = [
    {
      id: 1,
      image: "https://i.postimg.cc/qvRwVbyD/product1.jpg",
      name: "Logitech G435 Lightspeed wireless gaming headset - blue",
      desc: "",
      price: 1699.00,
      quantity: 20,
      category: " " ,
    },
    {
      id: 2,
      image: "https://i.postimg.cc/2yyM54tC/product2.webp",
      name: "HP Laptop 14S 14 inch Full HD | AMD Ryzen7 | 256GB SSD Notebook - Natural silver",
      desc: "",
      price: 10999.00,
      quantity: 20,
      category: " " ,
    },
    {
      id: 3,
      image: "https://i.postimg.cc/Gh2mskxW/product3.jpg",
      name: "Acer Aspire 1 Celeron 4GB 128GB 14 inch Notebook - Silver",
      desc: "",
      price: 3800,
      quantity: 3,
      category: " " ,
    },
    {
      id: 4,
      image:
        "https://i.postimg.cc/9Xq4f3C6/produc4.jpg",
      name: "Anker 737 Power Bank",
      desc: "",
      price: 3000,
      quantity: 4,
      category: " " ,
    },
    {
      id: 5,
      image:
        "https://i.postimg.cc/gcxnSxjF/product5.jpg",
      name: "Venom FerroFluid Magnetic Fluid Gaming Bluetooth Speaker",
      desc: "",
      price: 5400,
      quantity: 5,
    },
    {
      id: 6,
      image: "https://i.postimg.cc/3NfVW3Vz/product6.jpg",
      name: "49' Samsung Odyssey G9",
      desc: "",
      price: 25000,
      quantity: 6,
      category: " " ,
    },
    {
      id: 7,
      image: "https://i.postimg.cc/3NfVW3Vz/product6.jpg",
      name: "49' Samsung Odyssey G9",
      desc: "",
      price: 25000,
      quantity: 6,
      category: " " ,
    },
    {
      id: 8,
      image: "https://i.postimg.cc/3NfVW3Vz/product6.jpg",
      name: "49' Samsung Odyssey G9",
      desc: "",
      price: 25000,
      quantity: 6,
      category: " " ,
    },
    {
      id: 9,
      image: "https://i.postimg.cc/3NfVW3Vz/product6.jpg",
      name: "49' Samsung Odyssey G9",
      desc: "",
      price: 25000,
      quantity: 6,
      category: " " ,
    },
    {
      id: 10,
      image: "https://i.postimg.cc/3NfVW3Vz/product6.jpg",
      name: "49' Samsung Odyssey G9",
      desc: "",
      price: 25000,
      quantity: 6,
      category: " " ,
    },
    {
      id: 11,
      image: "https://i.postimg.cc/3NfVW3Vz/product6.jpg",
      name: "49' Samsung Odyssey G9",
      desc: "",
      price: 25000,
      quantity: 6,
      category: " " ,
    },
    {
      id: 12,
      image: "https://i.postimg.cc/3NfVW3Vz/product6.jpg",
      name: "49' Samsung Odyssey G9",
      desc: "",
      price: 25000,
      quantity: 6,
      category: " " ,
    },
    {
      id: 13,
      image: "https://i.postimg.cc/3NfVW3Vz/product6.jpg",
      name: "49' Samsung Odyssey G9",
      desc: "",
      price: 25000,      
      quantity: 6,
      category: " " ,
    },
    {
      id: 14,
      image: "https://i.postimg.cc/3NfVW3Vz/product6.jpg",
      name: "49' Samsung Odyssey G9",
      desc: "",
      price: 25000,
      quantity: 6,
      category: " " ,
    },
    {
      id: 15,
      image: "https://i.postimg.cc/3NfVW3Vz/product6.jpg",
      name: "49' Samsung Odyssey G9",
      desc: "",
      price: 25000,
      quantity: 6,
      category: " " ,
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