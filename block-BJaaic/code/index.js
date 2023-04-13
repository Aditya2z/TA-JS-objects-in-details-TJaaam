let animalMethods = {
    eat: () => {
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: (newLocation) => {
        this.location = newLocation;
    },
    summary: () => {
        console.log(`I live in ${this.location} and I have ${this.noOfLegs}`);
    },
}

function createAnimal(location, numberOfLegs) {
    let obj = Object.create(animalMethods);
    obj.location = location;
    obj.noOfLegs = numberOfLegs;
    return obj;
};

let dogMethods = {
    eat: () => {
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: (newLocation) => {
        this.location = newLocation;
    },
    summary: () => {
        console.log(`I am ${this.name} and I am of ${this.color} color. I can also bark`);
    },
    bark: () => {
        console.log(`I am ${this.name} and I can bark 🐶`);
    },
    changeName: (newName) => {
        this.name = newName;
    },
    changeColor: (newColor) => {
        this.color = newColor;
    },
};
Object.setPrototypeOf(dogMethods, animalMethods); // For second proto to be animal methods

function createDog(location, numberOfLegs, name, color) {
    let obj = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(obj, dogMethods); // for dogMethod to overshadow animalMethod
    obj.location= location;
    obj.noOfLegs= numberOfLegs;
    obj.name= name;
    obj.color= color;
}

let catMethods = {
    eat: () => {
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: (newLocation) => {
        this.location = newLocation;
    },
    summary: () => {
        console.log(`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`);
    },
    meow: () => {
        console.log(`I am ${this.name} and I can meow 🐶`);
    },
    changeName: (newName) => {
        this.name = newName;
    },
    changeColorOfEyes: (newColorOfEyes) => {
        this.colorOFEyes = newColorOfEyes;
    },
}

Object.setPrototypeOf(catMethods, animalMethods); // For second proto to be animal methods

function createDog(location, numberOfLegs, name, colorOfEyes) {
    let obj = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(obj, catMethods); // for dogMethod to overshadow animalMethod
    obj.location= location;
    obj.noOfLegs= numberOfLegs;
    obj.name= name;
    obj.colorOfEyes= color;
}