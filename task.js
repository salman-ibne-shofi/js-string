// Task-1
const colors = {
	red: "#ff0000",
	green: "#00ff00",
	blue: "#0000ff",
	"golden rod": "#daa520",
};

const goldenRodValue = colors["golden rod"];
console.log(goldenRodValue);

// Task-2
const car = {
	make: "Toyota",
	model: "Corolla",
	year: 2020,
};

// dot notation
car.passengerCapacity = 5;
// bracket notation
car["passenger capacity"] = 5;
console.log(car);

// Task-3
const student = {
	name: "Hamim Sakep",
	id: 5421,
	physics: {
		subject: "HSC Physics",
		author: "Shahjahan tapan",
		marks: 30,
	},
};

const mark = student.physics.marks;
console.log(mark);

// Task-4
let student1 = {
	name: "Ariana Granda",
	age: 21,
	city: "Gaibandha",
	isStudent: true,
};

const keysArray = Object.keys(student1);

const count = keysArray.length;
console.log("number of property: " + count);

// Task-5
let myObject = {
	name: "John Doe",
	age: 25,
	city: "Example City",
	isStudent: true,
};

for(const prop in myObject){
    console.log("key: " + prop + " | " + "types: " + typeof(myObject[prop]));
}