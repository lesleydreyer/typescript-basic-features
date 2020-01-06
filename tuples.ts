// Object
const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40
};

// Array
// const pepsi = ['brown', true, 40];

// Tuple - consistent order
// const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type Alias - creates the idea of a tuple inside application
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// usually easier to understand what you're getting if you use an object instead of a tuple because you can see what the numbers are
const carSpecs: [number, number] = [400, 3364];
const carStats = {
	horsepower: 400,
	weight: 3354
};
