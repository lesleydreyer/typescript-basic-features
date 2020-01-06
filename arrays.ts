// if you aren't initializing then annotate the type string[]
// const carMakers: string[] = [];
// if you initizlize the can leave off the annotation and let typescript infer type for you
const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// const carsByMake: string[][] = [];
// 2 dimensional array
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Why typed arrays?
// 1) Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// 2) Prevent imcompatible values
// carMakers.push(100); number not compatible for array of strings

// 3) Get help with 'map', forEach, reduce functions
carMakers.map((car: string): string => {
	return car.toUpperCase();
});

// 4) Flexible types - arrays can contain multiple different types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());

// tuples are similar to arrays
