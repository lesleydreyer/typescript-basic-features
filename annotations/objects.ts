const profile = {
	name1: 'alex',
	age: 20,
	coords: {
		lat: 0,
		lng: 15
	},
	// func defined in an object with annotation
	setAge(age: number): void {
		this.age = age;
	}
};

// const age = profile.age;
// const { age } = profile; //destructuring
// const { age }: { age: number } = profile; // destructuring with annotation
// can't do { age }: age:number cuz if you wanted to double up on destructuring and do
// { age, name }: number then it wouldn't be correct for name , would do
const { age, name1 }: { age: number; name1: string } = profile;
const {
	coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
