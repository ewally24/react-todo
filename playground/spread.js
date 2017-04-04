/*
function add(a, b) {
	return a + b;
}

var numbers = [9, 5]

console.log(add(...numbers));
*/

var groupA = ['Errol', 'David'];
var groupB = ['Morenda', 'Leticia']

var groupC = [...groupA, 3, ...groupB];

console.log(groupC);


// Iterate through an array of people (really should be an object tho) using the spread operator
var people = [
	 person1 = ['Errol', 27],
	 person2 = ['Andrew', 25]
]

function personInfo(name, age) {
	return name + ' is ' + age + ' yrs old';
}

people.forEach(function(person) {
	console.log(personInfo(...person))
});

var names = ['Lil Wayne', 'Kanye'];
var final = ['Kendrick'];

function combineArrays(originalArray, newArray) {
	originalArray.push(...newArray);
	originalArray.forEach(function(names) {
		console.log(names)
	})
}

combineArrays(names, final);