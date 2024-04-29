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

//Ex.1.2 Operador ternari
console.log('-------- Ex.1.2 Operador ternari --------');

//Ex.1 Operador ternari bàsic
const potConduir = (edat) => (edat > 18 ? 'Pot conduir' : 'No pot conduir');
console.log('potConduir(18) -->', potConduir(28));
console.log('potConduir(15) -->', potConduir(15));

//Ex.2 Ús amb operadors de comparació
const determinaMesGran = (num1, num2) =>
  num1 > num2
    ? `${num1} és mes gran que ${num2}`
    : `${num1} no es mes gran que ${num2}`;
console.log('determinaMesGran(2, 3) -->', determinaMesGran(2, 3));
console.log('determinaMesGran(3, 2) -->', determinaMesGran(3, 2));

//Ex.3 Ús enllaçat d'operadors ternaris
const trobarMaxim = (num1, num2, num3) =>
  num1 > num2
    ? num1 > num3
      ? `${num1} és el màxim`
      : `${num3} és el màxim`
    : num2 > num3
    ? `${num2} és el màxim`
    : `${num3} és el màxim`;
console.log('trobarMaxim(3, 2, 1) -->', trobarMaxim(3, 2, 1));
console.log('trobarMaxim(3, 1, 2) -->', trobarMaxim(3, 1, 2));
console.log('trobarMaxim(2, 3, 1) -->', trobarMaxim(2, 3, 1));
console.log('trobarMaxim(2, 1, 3) -->', trobarMaxim(2, 1, 3));
console.log('trobarMaxim(1, 2, 3) -->', trobarMaxim(1, 2, 3));

//Ex.4 Operador ternari dins d'un bucle
const parellOImparell = (arrayNum) => {
  for (let i = 0; i < arrayNum.length; i++) {
    console.log(
      `El número ${arrayNum[i]} és ${
        arrayNum[i] % 2 === 0 ? 'parell' : 'imparell'
      }`
    );
  }
};
parellOImparell([11, 20, 34, 4, 15, 43, 27, 8, 92, 121]);
