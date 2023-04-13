let animal = {
    location: location,
    noOfLegs: legs,
    __proto__: {
        eat: () => {
            console.log(`I live in ${location} and I can eat`);
        },
        changeLocation: (newLocation) => {
            location = newLocation;
        },
        summary: () => {
            console.log(`I live in ${location} and I have ${numberOfLegs}`);
        },
    }
}

let dog = {
    location: location,
    noOfLegs: legs,
    name: name,
    color: color,
    __proto__: {
        eat: () => {
            console.log(`I live in ${location} and I can eat`);
        },
        changeLocation: (newLocation) => {
            location = newLocation;
        },
        summary: () => {
            console.log(`I am ${name} and I am of ${color} color. I can also bark`);
        },
        bark: () => {
            console.log(`I am ${name} and I can bark 🐶`);
        },
        changeName: (newName) => {
            name = newName;
        },
        changeColor: (newColor) => {
            color = newColor;
        },
    }
}

let cat = {
    location: location,
    noOfLegs: legs,
    name: name,
    colorOFEyes: colorOFEyes,
    __proto__: {
        eat: () => {
            console.log(`I live in ${location} and I can eat`);
        },
        changeLocation: (newLocation) => {
            location = newLocation;
        },
        summary: () => {
            console.log(`I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`);
        },
        meow: () => {
            console.log(`I am ${name} and I can meow 🐶`);
        },
        changeName: (newName) => {
            name = newName;
        },
        changeColorOfEyes: (newColorOfEyes) => {
            colorOFEyes = newColorOfEyes;
        },
    }
}