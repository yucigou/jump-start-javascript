function Person(name, favColor) {
	this.name = name;
	this.favColor = favColor;
	
	this.greet = function() {
		console.log("Hello, my name is " + this.name + " and my favorite color is " + favColor + ".");
	}
}

var john = new Person("John", "red");
john.greet();

var grace = new Person("Grace", "purple");
grace.greet();
