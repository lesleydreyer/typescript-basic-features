// Class is a blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'

class Vehicle {
	// constructor is special function that lets you pass args into the class
	constructor(public color: string) {}

	protected honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car2 extends Vehicle {
	// don't put public modifier on color because field color belongs to parent Vehicle class
	constructor(public wheels: number, color: string) {
		super(color);
	}
	// overrides parent method
	private drive(): void {
		console.log('vroom');
	}
	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const car2 = new Car2(4, 'red');
car2.startDrivingProcess();

// PUBLIC - method can be called any where
// PRIVATE - method can only be called by other methods in this class
// PROTECTED - method can be called in other methods in this class, or by other methods in child classes

// get really strong code reuse in TS with Interfaces and Classes
