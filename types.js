// const number = 17;
// const string = "Я строка";
const boolean = true; // or false
const object = {
	a: "first",
	b: "second",
};

const array = ["fisrt", "second"];

const empty = function () {};
console.log(empty.length); // 0
const withArguments = function (a, b, c, d) {};
console.log(withArguments.length); // 4

// Типизация
// В строку
console.log(typeof number);
const newString = "Я строка " + number;
console.log(typeof String(number));
console.log(typeof newString);
console.log(typeof `Теперь я строка ${number}`);
console.log(typeof number.toString()); // string

console.log(
	String(null), // "null"
	String(undefined), // "undefined"
	String(true), // "true"
	String(false), // "false"
	String(3), // "3"
	String(NaN), // "NaN"
	String(180 * 44), // "7920"
	String({}), // "[object Object]"
	String({ name: "Al" }), // "[object Object]"
	String([]), // ""
	String([8, 9, 14]), // "8,9,14"
	String([[1, 4, 8], [48, 12], [89]]), // "1,4,8,48,12,89"
	String([
		{ a: 4, b: 8 },
		{ e: 78, i: "девять" },
	]) //"[object Object],[object Object]"
);

console.log(
	string + null, // "Я строка null"
	string + undefined, // "Я строка undefined"
	string + true, // "Я строка true"
	string + false, // "Я строка false"
	string + 3, // "Я строка 3"
	string + NaN, // "Я строка NaN"
	string + 180 * 44, // "Я строка 7920"
	string + {}, // "Я строка [object Object]"
	string + { name: "Al" }, // "Я строка [object Object]"
	string + [], // "Я строка"
	string + [8, 9, 14] // "Я строка 8,9,14"
);

const number = 17;
console.log(
	true.toString(), // "true"
	false.toString(), // "false"
	number.toString(), // "17"
	NaN.toString(), // "NaN"
	(180 * 44).toString(), // "7920"
	{}.toString(), // "[object Object]"
	{ name: "Al" }.toString(), // "[object Object]"
	[].toString(), // ""
	[8, 9, 14].toString() // "8,9,14"
);

// В число
console.log(typeof string);
console.log(typeof Number(string)); // number
console.log(typeof +string); // number

const string = "18";
const newNumber = parseInt(string, 10); // Число в десятичной системе счисления
console.log(newNumber); //18
console.log(typeof newNumber); //number

console.log(
	Number(null), // 0
	Number(undefined), // NaN
	Number(true), // 1
	Number(false), // 0
	Number("Я строка"), // NaN
	Number("17"), // 17
	Number(NaN), // NaN
	Number({}), // NaN
	Number({ name: "Al" }), // NaN
	Number([]), // 0
	Number([8, 9, 14]) // NaN
);

// В boolean
const fullString = "Я строка";
const emptyString = "";
const someNumber = 19;
const zero = 0;
const emptyArray = [];
const emptyObject = {};

console.log(
	Boolean("Я строка"), // true
	Boolean(""), //false
	Boolean(19), //true
	Boolean(0), // false
	Boolean([]), // true
	Boolean({}), // true
	Boolean(null), // false
	Boolean(undefined), // false
	Boolean(NaN) // false
);

console.log(
	!!"Я строка", // true
	!!"", //false
	!!19, //true
	!!0, // false
	!![], // true
	!!{}, // true
	!!null, // false
	!!undefined, // false
	!!NaN // false
);

console.log(typeof !!fullString); // boolean

// window.isNaN
//Вернет true
console.log(
	window.isNaN(NaN),
	window.isNaN("NaN"),
	window.isNaN(undefined),
	window.isNaN({}),
	window.isNaN("18,4"),
	window.isNaN(Date().toString()),
	window.isNaN("обычная строка")
);

//Вернет false
console.log(
	window.isNaN(true),
	window.isNaN(15),
	window.isNaN("15"),
	window.isNaN("15.5"),
	window.isNaN(""), //преобразуется в 0
	window.isNaN(" "), //преобразуется в 0
	window.isNaN(new Date())
);

// Number.isNaN
//Вернет true
console.log(Number.isNaN(NaN), Number.isNaN(Number.NaN), Number.isNaN(0 / 0));

//Вернет false
console.log(
	Number.isNaN("NaN"),
	Number.isNaN(undefined),
	Number.isNaN({}),
	Number.isNaN("18,4"),
	Number.isNaN(Date().toString()),
	Number.isNaN("обычная строка"),
	Number.isNaN(true),
	Number.isNaN(15),
	Number.isNaN("15"),
	Number.isNaN("15.5"),
	Number.isNaN(""), //преобразуется в 0
	Number.isNaN(" "), //преобразуется в 0
	Number.isNaN(new Date())
);

// Объект и массив
const newObject = {
	a: "first",
	b: "second",
};

console.log(Object.keys(newObject)); //[ 'a', 'b' ]
console.log(Object.values(newObject)); // [ 'first', 'second' ]
console.log(Object.entries(newObject)); //[ [ 'a', 'first' ], [ 'b', 'second' ] ]

const entries = new Map([
	["foo", "bar"],
	["baz", 42],
]);

const obj = Object.fromEntries(entries);
console.log(obj); //{ foo: 'bar', baz: 42 }
