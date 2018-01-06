// Object oriented programming

// Constructor function
// Why is this a constructor function? It depends on how we use it: new operator
// You can also look at it as a blueprint
function Person(name, favColor) {
	this.name = name;
	this.favColor = favColor;
	
	// this references the current object
	this.greet = function() {
		console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favColor + ".");
	}
}

// john an instance/object of class Person
var john = new Person("John", "red");
john.greet();

var grace = new Person("Grace", "purple");
grace.greet();
