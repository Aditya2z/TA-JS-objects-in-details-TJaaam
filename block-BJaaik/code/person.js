class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(value) {
        console.log(`${this.name} eat ${value}`);
    }
    sleep(value) {
        console.log(`${this.name} sleep ${value} hours`);
    }
    walk(value) {
        console.log(`${this.name} walk ${value} mins`);
    }

}

class Player extends Person {
    constructor(name, age, gender, sportsName) {
        super(name, age, gender);
        this.sportsName = sportsName;
    }
    play() {
        console.log(`${this.name} plays ${this.sportsName}`);
    }
}

class Cricketer extends Player {
    constructor(name, age, gender,teamName,sportsName = "cricket") {
        super(name, age, gender, sportsName);
        this.teamName = teamName;
    }
    playCricket() {
        console.log(`${this.name} plays ${this.sportsName} for ${this.teamName}`);
    }
}

class Teacher extends Person {
    constructor(name, age, gender, instituteName) {
        super(name, age, gender);
        this.instituteName = instituteName;
    }
    teach() {
        console.log(`${this.name} teaches at ${this.instituteName}`);
    }
}

class Artist extends Person {
    constructor(name, age, gender, kind) {
        super(name, age, gender);
        this.kind = kind;
    }
    createArt() {
        console.log(`${this.name} creates ${this.kind} kind of art`);
    }
}