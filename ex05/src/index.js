// Only change code below this line
class Microsoft {
    constructor (name);
    get name(){
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    static showName() {
        console.log('${name} + is philantropist!');
    }
    occupation
  }
  class Facebook {
    constructor (name, age)
    studentAge() {
        console.log('${name} is ${age}')
    }
  }
  class Facebook extends Microsoft
  // Only change code above this line
  module.exports = {
      Microsoft,
      Facebook
  }