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
const holaEn3s = () => setTimeout(() => console.log('holaEn3s() --> Hola en 3 segons'), 3000);
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
console.log('parellOImparell([11, 20, 34, 4, 15, 43, 27, 8, 92, 121]) -->');
parellOImparell([11, 20, 34, 4, 15, 43, 27, 8, 92, 121]);

//Ex.1.3 Callbacks
console.log('-------- Ex.1.3 Callbacks --------');

//Ex.1 Callback bàsic
const processar = (num, callback) => callback(num);
console.log(
  'processar(2, (callback)) -->',
  processar(2, (num) => `És el número ${num}`)
);

//Ex.2 Callbacks amb operacions matemàtiques
const calculadora = (num1, num2, callback) => {
  return callback(num1, num2);
};
console.log(
  'calculadora(2, 3, (callback)) -->',
  calculadora(2, 3, (num1, num2) => num1 + num2)
);

//Ex.3 Ús de callbacks en funcions asíncrones
const esperarISaludar = (nom, callback) => {
  setTimeout(() => {
    console.log(`esperarISaludar('Marc', (callback)) -->`, callback(nom));
  }, 2000);
};
esperarISaludar('Marc', (nom) => `Hola ${nom} en 2 segons`);

//Ex.4 Callbacks amb arrays
const processaElements = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};
console.log('processaElements([2, 4, 5, 6, 8, 14], (callback) -->');
processaElements([2, 4, 5, 6, 8, 14], (num) =>
  console.log(`El quadrat de ${num} és ${num * num}`)
);

//Ex.5 Callbacks amb strings
const processarCadena = (string, callback) => {
  const stringModificat = string.toUpperCase();
  return callback(stringModificat);
};
console.log(
  'processarCadena("hola", (callback)) -->',
  processarCadena('hola', (string) => `${string} en majúscules`)
);

//Ex.1.4 Rest & Spread operators
console.log('-------- Rest & Spread operators --------');

//Ex.1 Spread oerator en arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log('arr3 -->', arr3);

//Ex.2 Rest operator en funcions
const suma = (...args) => {
  let sumaTotal = 0;
  for (let element of args) {
    sumaTotal += element;
  }
  return sumaTotal;
}
console.log('suma(2, 3, 4, 5) -->', suma(2, 3, 4, 5));
console.log("suma(2, 3, 4, 5, 6, 7, 8, 9, 10) -->", suma(2, 3, 4, 5, 6, 7, 8, 9, 10));

//Ex.3 Copiant objectes amb spread
const objecte1 = { a: 1, b: 2, c: 3 };
console.log("objecte1 -->",objecte1);

const objecte2 = { ...objecte1};
console.log('objecte2 -->', objecte2);

objecte2.c = 4;
console.log('objecte1 original -->', objecte1);
console.log('objecte2 canviat -->', objecte2);

//Ex.4 Rest operator en desestructuració
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [primer, segon, ...rest] = arr4;
console.log('primer -->', primer);
console.log('segon -->', segon);
console.log('rest -->', rest);

//Ex.5 Spread operator en funcions
const nums = [1, 2, 3];
const suma2 = (numA, numB, numC) => numA + numB + numC;
console.log('suma2(2, 3, 4) -->', suma2(...nums));

//Ex.6 Spread operator en objectes
const objecte3 = { a: 1, b: 2, c: 3 };
const objecte4 = { d: 4, e: 5, f: 6 };
const objecte5 = { ...objecte3, ...objecte4 };
console.log('objecte5 -->', objecte5);

