const menuItems = [
  { name: "Margherita Pizza", price: 199, image: "Margherita Pizza.jpg" },
  { name: "Veg Burger", price: 99, image: "Veg Burger.jpg" },
  { name: "French Fries", price: 69, image: "French Fires.jpg" },
  { name: "Pasta Alfredo", price: 149, image: "Pasta Alfredo.jpg" },
  { name: "Cold Coffee", price: 79, image: "Cold Coffee.jpg" }
];

const cart = [];

function renderMenu() {
  const menu = document.getElementById('menu');
  menuItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'food-card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>Price: ₹${item.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    menu.appendChild(card);
  });
}

function addToCart(index) {
  cart.push(menuItems[index]);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cartList');
  const cartTotal = document.getElementById('cartTotal');
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}

renderMenu();



