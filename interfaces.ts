/*const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true
};

const printVehicle = (vehicle: {
	name: string; // annotation is a lot so change below to Vehicle interface
	year: number; // annotation is a lot so change below to Vehicle interface
	broken: boolean; // annotation is a lot so change below to Vehicle interface
}): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken?: ${vehicle.broken}`);
};

printVehicle(oldCivic);*/
//////////////////////////////////
// declare an interface which goal of interface is to define anew type
// interface Vehicle {
// 	name: string;
// 	year: Date;
// 	broken: boolean;
//  summary(): string; //function called summary that returns a string
// }

// const oldCivic = {
// 	name: 'civic',
// 	year: new Date(),
// 	broken: true,
// summary(): string {
//     return `Name: ${this.name}`;
// }
// };

// // in order to call printVehicle you must pass in an object that meets the specifications of the Vehicle interface
// const printVehicle = (vehicle: Vehicle): void => {
// 	console.log(`Name: ${vehicle.name}`);
// 	console.log(`Year: ${vehicle.year}`);
// 	console.log(`Broken?: ${vehicle.broken}`);
// };

// printVehicle(oldCivic);

//////////////////////////
// could make more generic and take car properties off since you're only using the summary in the function
interface Reportable {
	summary(): string; //function called summary that returns a string
}

const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	}
};

const drink1 = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has: ${this.sugar} grams of sugar`;
	}
};

// a reusable function that can be used with objects that are very different but both have a summary function to satisfy the Reportable interface
// Reportable interface is gatekeeper to using printSummary function
const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink1);
