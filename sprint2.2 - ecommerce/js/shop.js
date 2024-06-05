// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart;
let comptador;
let total;
recuperarDades();
pintarComptador();

// Guardar dades a localStorage
function guardarDades() {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('comptador', JSON.stringify(comptador));
  localStorage.setItem('total', JSON.stringify(total));
}

// Carregar dades de localStorage
function recuperarDades() {
  cart = JSON.parse(localStorage.getItem('cart')) ?? [];
  comptador = JSON.parse(localStorage.getItem('comptador') ?? 0);
  total = JSON.parse(localStorage.getItem('total') ?? 0);
}

// Pintar comptador
function pintarComptador() {
  document.getElementById('count_product').innerHTML = comptador;
}

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
  pintarComptador();
  console.log('cart -->', cart);
  console.table(cart);
  console.log('comptador -->', comptador);

  // Calcular total carro + promocions
  calculateTotal();
  // Guarda dades a LocalStorage
  guardarDades();
}

// Exercise 2
function cleanCart() {
  cart.length = 0;
  comptador = 0;
  total = 0;
  pintarComptador();
  guardarDades();
  console.log('cart -->', cart);
  open_modal();
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  total = 0;
  // Aplicar promocions al carro
  applyPromotionsCart();
  for (let producteCart of cart) {
    if (producteCart.subTotalWithDiscount)
      total += producteCart.subTotalWithDiscount;
    else total += producteCart.subTotal;
  }
  console.log('total -->', total);
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
  console.log('applyPromotionsCart -->', cart);
  console.table(cart);
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom/*
  let cart_list = document.getElementById('cart_list');
  cart_list.innerHTML = '';
  let total_price = document.getElementById('total_price');
  total_price.innerHTML = '';
  recuperarDades();

  for (let producteCart of cart) {
    let fila = document.createElement('tr');
    fila.innerHTML = `
      <th scope="row">${producteCart.name}</th>
      <td>${producteCart.price}</td>
      <td>
      <button class="badge bg-gray text-black rounded-pill border-0" onclick="addToCart(${producteCart.id})">+</button>
      ${producteCart.quantity}
      <button class="badge bg-gray text-black rounded-pill border-0" onclick="removeFromCart(${producteCart.id})">-</button>
      </td>
      <td>${
        producteCart.subTotal
          ? producteCart.subTotal
          : producteCart.subTotalWithDiscount
      }</td>
    `;
    cart_list.append(fila);
  }
  total_price.innerHTML = total;
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
  let indexProducteCart = cart.findIndex((element) => element.id === id);
  if (indexProducteCart != -1) {
    let producteCart = cart[indexProducteCart];
    if (producteCart.quantity > 1) {
      producteCart.quantity--;
    } else {
      cart.splice(indexProducteCart, 1);
    }
    comptador--;
    document.getElementById('count_product').innerHTML = comptador;
    printCart();
  }
}

function open_modal() {
  console.log('open_modal -->', cart);
  printCart();
}
