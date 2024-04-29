console.log('-------- Exercicis React2 - Sprint2 --------');

//Ex.1.1 Arrow functions
console.log('-------- Ex.1.1 Arrow functions --------');

//Ex.1 - Conversió de funcions
function add(a, b) {
  return a + b;
}
console.log('add(2, 4) -->', add(2, 4));

const add2 = (a, b) => a + b;
console.log('add2(2, 4) -->', add2(2, 4));

//Ex.2 Funció fletxa sense paràmetres
//const randomNumber = () => Math.round(Math.random() * 100);
//generar un nombre aleatori entre un rang Max i Min
//Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
//aleatori entre 0 i 100
const randomNumber = () => Math.floor(Math.random() * (100 - 0 + 1)) + 0;
console.log('randomNumber() -->', randomNumber());

//Ex.3 Ús de this en les fucions fletxa
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Bon dia ${this.name}!`;
  }
}

const person = new Person('Jordi');
console.log('person.greet() -->', person.greet());

//Ex.4 Funció fletxa amb setTimeout
const holaEn3s = () => setTimeout(() => console.log('Hola en 3 segons'), 3000);
holaEn3s();
