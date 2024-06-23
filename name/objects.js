function Person(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.fullname = function () {
    return this.firstname + " " + this.lastname;
  };
}

const test = new Person("Ali", "Yılmaz", 12);

console.log(test.fullname());
