// Type Annotations - code we add to tell Typescript what type of value a variable will refer too
// developers tell typescript manually
// Type Inference - Typescript tries to figure out what type of value a variable refers to
// typescript guesses for us

// annotation
let apples: number = 5;
// if you do declaration and initialization on same line like let apples = 5
// then typescript will do inference and if you hover over apples it will gather
// that it's the same as the annotation (apples is a number). If you do let apples; then set
// apples to 5 later in the code it will say apples is type any if hovering over.
// So you don't have to use annotations because typescript will infer for you but you should use
// annotations when a function returns the 'any' type and need to clarify the value,
// when we declare a variable on one line and initialize later, and
// when we want a variable to have a type that can't be inferred
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car1: Car = new Car();

// Object literal (only have to use ; when separating different types or property names so don't have to do after y: number)
let point: { x: number; y: number } = {
	x: 10,
	y: 20
};

// Function
// : (i: number) => void is the annotation (description of the function)
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

// WHEN TO USE ANNOTATIONS
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
//const coordinates = JSON.parse(json);// typescript can't infer what you will get from JSON.parse cuz it just sees a string, not what JSON.parse will return so it gives you 'any'. So you can't do coords.x cuz it doesn't see that, but you can define structure of coords to help ts out and not get the 'any' and then do coords.x
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2) When we declare a variable on one line and initialize later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // you would set to boolean here otherwise will be any, prob better to assign to false

for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		foundWord = true;
	}
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // can be either boolean or number instead of any

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i];
	}
}
