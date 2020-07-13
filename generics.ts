/**
 * CLASS GENERICS
 */

// T is like an argument, can name it whatever
// so instead of above do this instead...
class ArrayOfAnything<T> {
	constructor(public collection: T[]) {}

	get(index: number): T {
		return this.collection[index];
	}
}

// if you don't pass <string> typescript inference will happen
// since it sees you passed in strings it will infer it as strings
// but it's a good idea to keep the <string> annotation to help avoid errors
new ArrayOfAnything<string>(['a', 'b', 'c']);

/**
 * FUNCTION GENERICS
 */

function printAnything<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

// if you don't pass <string> typescript inference will happen
// since it sees you passed in strings it will infer it as strings
// but it's a good idea to keep the <string> annotation to help avoid errors
printAnything<string>(['a', 'b', 'c']);

/**
 * GENERIC CONSTRAINTS
 */

class Car {
	print() {
		console.log('I am a car');
	}
}

class House {
	print() {
		console.log('I am a house');
	}
}

interface Printable {
	print(): void;
}

// extends Printable is constraint because it says whatever type T
// you pass in must have all the properties Printable has
function printHousesOrCars<T extends Printable>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		arr[i].print();
	}
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
