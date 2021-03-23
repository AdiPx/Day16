// Only change code below this line
class Pets {
    constructor(name, legs)
    walk(numberOfLegs) {
    console.log("${name} + is walking on + ${numberOfLegs}");
    }
     }
class Dog extends Pets {
    super(name, legs);
    bark(dogSay) {
    return dogSay = ("${_name} + says WUF-WUF");
  }


}
// Only change code above this line

let dog = new Dog(Pujdo, 4); // Change this line
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
  Pets,
  Dog,
};
