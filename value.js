const person = {
	name: "naim khan",
	age: 25,
	profession: "Web Developer",
	salary: 25000,
	married: true,
	"fav places": ["bandarbon", "saintmartin", "kuakata"],
};

person.salary = 30000;
person["age"] = 26;
person["fav places"] = ["maldivs", "bali", "pataya"];
console.log(person);
