//add function annotated - takes in arguments a & b as numbers, and returns a number
const add = (a: number, b: number): number => {
	return a + b;
};

// if you leave off :number and let TS infer it then you will see that subtract takes in arguments a & b as numbers and returns nothing but you won't get any errors because you let TS infer it
/* const subtract = (a: number, b: number) => {
	a - b;
}; */

// if you add return annotation of : number then you'll get a TS error because it will see that you aren't returning anything
/* const subtract = (a: number, b: number): number => {
	a - b;
}; */

// good to just annotate instead of rely on inference so you don't end up with potential errors above
const subtract = (a: number, b: number): number => {
	return a - b;
};

// function syntax instead of arrow syntax
function divide(a: number, b: number): number {
	return a / b;
}

// anonymous function assigned to variable
const multiply = function(a: number, b: number): number {
	return a * b;
};

// void can also return null and return undefined
const logger = (message: string): void => {
	console.log(message);
};

// returns nothing, at sometime you'll throw an error and exit the func early without returning a value
const throwError1 = (message: string): never => {
	throw new Error(message);
};

// return never doesn't happen often though, more likely you'll still return the message
// possibly returns nothing if no message, but annotate with what you expect to return (message)
const throwError2 = (message: string): string => {
	if (!message) {
		throw new Error(message);
	}
	return message;
};

// returns nothing, just a chance of never reaching end of function
const throwError3 = (message: string): void => {
	if (!message) {
		throw new Error(message);
	}
};

const todaysWeather = {
	date: new Date(),
	weather: 'sunny'
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
// 	console.log(forecast.date);
// 	console.log(forecast.weather);
// };

// ES2015
// const logWeather = ({ date, weather }) => {
// 	console.log(date);
// 	console.log(weather);
// };

const logWeather = ({
	date, //destructuring
	weather //destructuring
}: {
	date: Date; //ts annotation
	weather: string; //ts annotation
}): void => {
	console.log(date);
	console.log(weather);
};

logWeather(todaysWeather);
