
// - Class Pattern

class CreateAnimal {
    constructor(location, numberOfLegs) {
        this.location = location;
        this.noOfLegs = numberOfLegs;
    }
    eat() {
        console.log(`I live in ${this.location} and I can eat`);
    };
    changeLocation(newLocation) {
        this.location = newLocation;
    };
    summary() {
        console.log(`I live in ${this.location} and I have ${this.noOfLegs} legs`);
    };
};

class CreateDog extends CreateAnimal{
    constructor(location, numberOfLegs, name, color) {
        super(location, numberOfLegs);
        this.name= name;
        this.color= color;
    }
    summary() {
        console.log(`I am ${this.name} and I am of ${this.color} color. I can also bark`);
    };
    bark() {
        console.log(`I am ${this.name} and I can bark 🐶`);
    };
    changeName(newName) {
        this.name = newName;
    };
    changeColor(newColor) {
        this.color = newColor;
    };
}

class CreateCat extends CreateAnimal {
    constructor(location, numberOfLegs, name, colorOfEyes) {
        super(location, numberOfLegs);
        this.name= name;
        this.colorOfEyes= colorOfEyes;
    }
    summary() {
        console.log(`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`);
    };
    meow() {
        console.log(`I am ${this.name} and I can meow 🐶`);
    };
    changeName(newName) {
        this.name = newName;
    };
    changeColorOfEyes(newColorOfEyes) {
        this.colorOFEyes = newColorOfEyes;
    };
}