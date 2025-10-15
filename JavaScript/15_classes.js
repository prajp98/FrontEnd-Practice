class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

class Car1 {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
const myCar = new Car1("Ford", 2014);
  
console.log("My car is " + myCar.age() + " years old.");

class Car2 {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  const date = new Date();
  let year = date.getFullYear();

  myCar = new Car2("Ford", 2014);
console.log("My car is " + myCar.age(year) + " years old.");

//Inheritance
class Car3 {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car3 {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
myCar = new Model("Ford", "Mustang");
console.log(myCar.show());


class Car4 {
    constructor(brand) {
      this.carname = brand;
    }
    get cnam() {
      return this.carname;
    }
    set cnam(x) {
      this.carname = x;
    }
  }
  
myCar = new Car4("Ford");
console.log(myCar.cnam);



// Static class methods are defined on the class itself.
// You cannot call a static method on an object, only on an object class.
class Car5 {
    constructor(name) {
      this.name = name;
    }
    static hello(x) {
      return "Hello " + x.name;
    }
  }
myCar = new Car("Ford");
console.log(Car.hello(myCar));
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();