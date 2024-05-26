// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
let products = [
  {
    id: 1,
    name: 'cooking oil',
    price: 10.5,
    type: 'grocery',
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: 'Pasta',
    price: 6.25,
    type: 'grocery',
  },
  {
    id: 3,
    name: 'Instant cupcake mixture',
    price: 5,
    type: 'grocery',
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: 'All-in-one',
    price: 260,
    type: 'beauty',
  },
  {
    id: 5,
    name: 'Zero Make-up Kit',
    price: 20.5,
    type: 'beauty',
  },
  {
    id: 6,
    name: 'Lip Tints',
    price: 12.75,
    type: 'beauty',
  },
  {
    id: 7,
    name: 'Lawn Dress',
    price: 15,
    type: 'clothes',
  },
  {
    id: 8,
    name: 'Lawn-Chiffon Combo',
    price: 19.99,
    type: 'clothes',
  },
  {
    id: 9,
    name: 'Toddler Frock',
    price: 9.99,
    type: 'clothes',
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];
let comptador = 0;
let total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  let producte = products.find((element) => element.id === id);
  let producteCart = { ...producte };
  producteCart.quantity = 0;
  producteCart.subTotal = 0;
  // 2. Add found product to the cart array
  let indexProducteCart = cart.findIndex(
    (element) => element.id === producteCart.id
  );
  if (indexProducteCart != -1) {
    cart[indexProducteCart].quantity++;
    cart[indexProducteCart].subTotal =
      cart[indexProducteCart].price * cart[indexProducteCart].quantity;
  } else {
    producteCart.quantity = 1;
    producteCart.subTotal = producteCart.price * producteCart.quantity;
    cart.push(producteCart);
  }
  comptador++;
  document.getElementById('count_product').innerHTML = comptador;
  console.log('cart -->', cart);
  console.table(cart);
  console.log('comptador -->', comptador);

  // Calcular total carro
  calculateTotal();
}

// Exercise 2
function cleanCart() {
  cart.length = 0;
  comptador = 0;
  document.getElementById('count_product').innerHTML = comptador;
  console.log('cart -->', cart);
  printCart();
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let total = 0;
  // Aplicar promocions al carro
  applyPromotionsCart();
  for (let producteCart of cart) {
    if (producteCart.subTotalWithDiscount)
      total += producteCart.subTotalWithDiscount;
    else total += producteCart.subTotal;
  }
  console.log('total -->', total);
  return total;
}

// Exercise 4
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (let producteCart of cart) {
    if (producteCart.id == 1 || producteCart.id == 3) {
      let product = products.find((element) => element.id === producteCart.id);
      if (producteCart.quantity >= product.offer.number) {
        producteCart.subTotalWithDiscount =
          (producteCart.quantity *
            Math.round(
              (producteCart.price -
                (producteCart.price * product.offer.percent) / 100) *
                100
            )) /
          100;
        delete producteCart.subTotal;
      }
    }
  }
  console.log('cart -->', cart);
  console.table(cart);
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  let cart_list = document.getElementById('cart_list');
  cart_list.innerHTML = '';
  let total_price = document.getElementById('total_price');
  total_price.innerHTML = '';

  for (let producteCart of cart) {
    let fila = document.createElement('tr');
    fila.innerHTML = `
      <th scope="row">${producteCart.name}</th>
      <td>${producteCart.price}</td>
      <td>${producteCart.quantity}</td>
      <td>${
        producteCart.subTotal
          ? producteCart.subTotal
          : producteCart.subTotalWithDiscount
      }</td>
    `;
    cart_list.append(fila);
  }
  total_price.innerHTML = calculateTotal();
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {}

function open_modal() {
  printCart();
}
