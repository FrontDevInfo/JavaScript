const number = 17;
const string = "Я строка";
const boolean = true; // or false
const object = {
	a: "first",
	b: "second",
};

const array = ["fisrt", "second"];

// Типизация
// В строку
console.log(typeof number);
const newString = "Я строка " + number;
console.log(typeof String(number));
console.log(typeof newString);
console.log(typeof `Теперь я строка ${number}`);
console.log(typeof number.toString());

// В число
console.log(typeof string);
console.log(typeof Number(string));
console.log(typeof +string);

// В boolean
const fullString = "Я строка";
const emptyString = "";
const someNumber = 19;
const zero = 0;
const emptyArray = [];
const emptyObject = {};

console.log(
	Boolean(fullString),
	Boolean(emptyString),
	Boolean(someNumber),
	Boolean(zero),
	Boolean(fullString),
	Boolean(emptyObject),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
);

console.log(!!fullString);

// Объект и массив
const newObject = {
	a: "first",
	b: "second",
};

console.log(Object.keys(newObject));
console.log(Object.values(newObject));
console.log(Object.entries(newObject));

const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
const obj = Object.fromEntries(entries);
console.log(obj)