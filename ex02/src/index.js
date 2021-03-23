// Only change code below this line
class Book {
  constructor(title) {
    this._title = title;
  }
  get name() {
    return this._title;
  }
  set name(title) {
    this._name = title;
  }
}
// Only change code above this line
const littlePrince = new Book("The Little Prince"); // Change this line
console.log(littlePrince._title); // The little Prince
littlePrince.title = "Le Petit Prince"; // Change this line
console.log(littlePrince.title); // Le Petit Prince

module.exports = Book;
