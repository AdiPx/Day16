class Person {
    constructor(name, email, age) {
    const getPerson = () => {
        var personInfo = ('Name: ${name}', 'email: ${email}', 'age: ${age}');
        return personInfo;
    }
    }
}
module.exports = Person;