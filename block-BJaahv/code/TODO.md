# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
```js
function createObject(name, id, noOfProjects) {
  let obj = {};
  obj.name = name;
  obj.id = id;
  obj.noOfProjects = noOfProjects;
  obj.getProjects = () => noOfProjects;
  obj.changeName = (newName) => {
    let oldname = obj.name;
    obj.name = newName;
    return oldname;
  };
  obj.incrementProject = (value) => {
    obj.noOfProjects += value;
    return obj.noOfProjects;
  }
    obj.decrementProject = (value) => {
    obj.noOfProjects -= value;
    return obj.noOfProjects;
  }
  return obj;
}
```
- [ ] Using Object.create (prototypal pattern)
```js
let methods = {
  this.getProjects = () => noOfProjects;
  this.changeName = (newName) => {
    let oldname = this.name;
    this.name = newName;
    return oldname;
  };
  this.incrementProject = (value) => {
    this.noOfProjects += value;
    return this.noOfProjects;
  }
    this.decrementProject = (value) => {
    this.noOfProjects -= value;
    return this.noOfProjects;
  }
}
function createObject(name, id, noOfProjects) {
  let obj = Object.create(methods);
  obj.name = name;
  obj.id = id;
  obj.noOfProjects = noOfProjects;
  return obj;
}
```
- [ ] Using Pseudoclassical Way
```js
function CreateObject(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
  return this;
}

CreateObject.prototype = {
  getProjects: () => noOfProjects,
  changeName: (newName) => {
    let oldname = this.name;
    this.name = newName;
    return oldname;
  },
  incrementProject: (value) => {
    this.noOfProjects += value;
    return this.noOfProjects;
  },
  decrementProject: (value) => {
    this.noOfProjects -= value;
    return this.noOfProjects;
  }
}
```

- [ ] Using Class
```js
class CreateObject {
  constructor(name, id, noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects() {return this.noOfProjects;}
  changeName(newName) {
    let oldname = this.name;
    this.name = newName;
    return oldname;
  }
  incrementProject(value) {
    this.noOfProjects += value;
    return this.noOfProjects;
  }
  decrementProject(value) {
    this.noOfProjects -= value;
    return this.noOfProjects;
  }
}
```

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.
