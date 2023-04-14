# Inheritance

Convert the below requirements into inheritance using:

- Pseudoclassical Pattern
```js
// - Pseudoclassical Pattern

function CreateAnimal(location, numberOfLegs) {
    this.location = location;
    this.noOfLegs = numberOfLegs;
    return this;
};

CreateAnimal.prototype = {
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

function CreateDog(location, numberOfLegs, name, color) {
    CreateAnimal.call(this);
    this.name= name;
    this.color= color;
    return this;
}

CreateDog.prototype = {
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

function CreateCat(location, numberOfLegs, name, colorOfEyes) {
    CreateAnimal.call(this);
    this.name= name;
    this.colorOfEyes= color;
    return this;
}

CreateCat.prototype = {
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
```

- Class Pattern
```js
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
```

#### Animal

Properties:

- `location`
- `numberOfLegs`

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

#### Dog

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `color`

Methods:

- `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
- `changeName(newName)` - accepts the name property and updates the name of the dog
- `changeColor(newColor)` - accepts the new color and updates the color of the dog
- `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

#### Cat

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `colorOfEyes`

Methods:

- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

- `changeName(newName)` - accepts the name property and updates the name of the dog

- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`
