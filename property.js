const person = {
	name: "naim khan",
	age: 25,
	profession: "Web Developer",
	salary: 25000,
	married: true,
    "fav places": ["bandarbon", "saintmartin", "kuakata"]
};

// console.log(person);

// dot notation
// by using dot symbol access the value of a property
// console.log(person.profession);
const income = person.salary;
// console.log(income);

// bracket notation
// access by using third bracket
// console.log(person["age"]);
const boyos = person["age"]
// console.log(boyos);

// error
// console.log(person."fav places");
console.log(person["fav places"]);
