function Person(name, favColor) {
	this.name = name;
	this.favColor = favColor;
	
	this.greet = function() {
		console.log("Hi, my name is " + this.name + " and my favorite color is " + this.favColor + ".");
	}
}

module.exports = Person;