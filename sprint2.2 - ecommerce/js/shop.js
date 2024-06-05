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
  console.log('Guardar dades a localStorage');
  console.log('total -->', total);
  console.table(cart);
}

// Carregar dades de localStorage
function recuperarDades() {
  cart = JSON.parse(localStorage.getItem('cart')) ?? [];
  comptador = JSON.parse(localStorage.getItem('comptador') ?? 0);
  total = JSON.parse(localStorage.getItem('total') ?? 0);
  console.log('Recuperar dades des de localStorage');
  console.log('total -->', total);
  console.table(cart);
}

// Pintar comptador
function pintarComptador() {
  document.getElementById('count_product').innerHTML = comptador;
  console.log('Actualitzar comptador');
  console.log('comptador -->', comptador);
}

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  const producte = products.find((element) => element.id === id);
  const producteNou = { ...producte };
  // 2. Add found product to the cart array
  const indexProducteCart = cart.findIndex(
    (element) => element.id === producteNou.id
  );
  if (indexProducteCart != -1) {
    cart[indexProducteCart].quantity++;
  } else {
    producteNou.quantity = 1;
    cart.push(producteNou);
  }
  comptador++;
  pintarComptador();
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
  printCart();
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
}

// Exercise 4
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (let producteCart of cart) {
    producteCart.subTotal = producteCart.price * producteCart.quantity;
    if (producteCart.id == 1 || producteCart.id == 3) {
      const producte = products.find(
        (element) => element.id === producteCart.id
      );
      if (producteCart.quantity >= producte.offer.number) {
        producteCart.subTotalWithDiscount =
          (producteCart.quantity *
            Math.round(
              (producteCart.price -
                (producteCart.price * producte.offer.percent) / 100) *
                100
            )) /
          100;
        delete producteCart.subTotal;
      }
    }
  }
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
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
      <td id="quantity">
      ${producteCart.quantity} 
      </td>
      <td>${
        producteCart.subTotal
          ? producteCart.subTotal
          : producteCart.subTotalWithDiscount
      }</td>
    `;
    cart_list.append(fila);
    let campQuantity = document.getElementById('quantity');
    campQuantity.innerHTML = `
      <button class="badge bg-gray text-black rounded-pill border-0 pb-2" onclick="addToCart(${producteCart.id})">+</button>
      ${producteCart.quantity}
      <button class="badge bg-gray text-black rounded-pill border-0 pb-2 px-2" onclick="removeFromCart(${producteCart.id})">-</button>
      `;
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

    // Calcular total carro + promocions
    calculateTotal();
    console.log(total);
    // Guarda dades a LocalStorage
    guardarDades();
    pintarComptador();
    printCart();
  }
}

function addToCart(id) {
  let indexProducteCart = cart.findIndex((element) => element.id === id);
  if (indexProducteCart != -1) {
    let producteCart = cart[indexProducteCart];
    producteCart.quantity++;
    comptador++;

    // Calcular total carro + promocions
    calculateTotal();
    // Guarda dades a LocalStorage
    guardarDades();
    pintarComptador();
    printCart();
  }
}

function open_modal() {
  printCart();
}
