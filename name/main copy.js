import { toplama1, name } from "./math.js";
console.log(toplama1());
console.log(name);
// "use strict";

// /*
//  * Operatör önceliği
//  */

// // Parantezler ile => ()
// let x = 5;
// let sonuc = (3 + 2) * 5;
// console.log(sonuc);

// sonuc = 6 + (3 * 4) / 2;

// //! Object Destructuring

// const person = {
//   name: "Ali",
//   age: 50,
//   city: "Antalya",
//   isStudent: false,
// };

// let { name, age, city, isStudent, country = "TR" } = person;

// console.log(name);
// console.log(age);
// console.log(city);
// console.log(isStudent);
// console.log(country);

// let name1 = "Udemig";
// // string destructuring
// let [a1, a2, a3, a4, a5, a6, a7] = name1;

// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// console.log(a6);
// // array desctructuring
// const fruits = ["Banana", "Oranges", "Apples"];

// const [fruit1, fruit2] = fruits;
// console.log(fruit1);
// console.log(fruit2);

// let [meyve1, , , meyve2] = fruits;
// console.log(meyve1);
// console.log(meyve2);

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

// const [a, b, c, d, ...rest] = numbers;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(rest);

// //Block Scope
// {
//   let x = 2;
// }
// // console.log(x);
// // function scope
// // Fonksiyon içerisinde tanımladığımız değişkene sadece fonksiyon içerisinde ulaşırız.Dışardan ulaşmak istiyorsak return ile dışarı döndeririz.
// function myFunction() {
//   let carName = "Volvo";
//   let sonuc = x + 5;
//   return carName + sonuc;
// }
// // console.log(carName);
// // console.log(myFunction());

// // const array = [{ name: "Ali" }];
// // array.map((item) => console.log(item.name));
// // console.log(array[0].name);

// // let number1 = 10;

// // function cikarma() {
// //   let number2 = 2;
// //   let sonuc = number1 - number2;
// //   return sonuc;
// // }
// // console.log(cikarma());

// // const number = toplama();
// // console.log(number);

// // function toplama() {
// //   let number2 = 2;
// //   let sonuc = number1 + number2;
// //   return sonuc;
// // }

// //* Javascript Hoisting

// console.log(hoistedVar);
// var hoistedVar = 5;
// console.log(hoistedVar);

// // console.log(hoistedLet);
// // let hoistedLet = 5;
// // console.log(hoistedLet);

// // console.log(sayi);
// // const sayi = 5;
// // console.log(sayi);

// const number = toplama();
// console.log(number);
// // Fonksiyon deklarasyonları, tamamen yukarı çekilir ve bu nedenle fonksiyonlar,tanımlanmdan önce çağrılabilir
// function toplama() {
//   let number2 = 2;
//   let number1 = 4;
//   let sonuc = number1 + number2;
//   return sonuc;
// }

// //* use strict

// // y = 5;
// // console.log(y);

// // function fnExample() {
// //   "use strict";
// //   a = 3.1;
// // }
// // fnExample();

// function sum(a, c, b) {
//   return a + c + b;
// }
// console.log(sum(1, 4, 6));

// // function f() {
// //   const const = 10;
// //   return const;
// // }
// // console.log(f());

// // let n = 010;
// // res = 10;

// const student = {
//   firstName: "ali",
//   lastName: "veli",
//   id: 5555,
//   fullName: function () {
//     return this.firstName + "  " + this.lastName;
//   },
//   fnExample: function () {
//     return this;
//   },
// };

// console.log(student.firstName);
// console.log(student.fullName());
// console.log(student.fnExample());

// const person1 = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person2 = {
//   firstName: "Ali",
//   lastName: "Veli",
// };

// console.log(person1.fullName.call(person2));

const person = {
  firstName: "ali",
  lastName: "veli",
  fullName: function () {
    return this.firstName + "  " + this.lastName;
  },
};

const member = {
  firstName: "Batuhan",
  lastName: "Yıldız",
};

const fullName = person.fullName.bind(member);
console.log(fullName());

//* Javascript Arrow Function

function fnExample_1() {}

const myFunction = (x, y) => {
  console.log(x);
  console.log(y);
  console.log("çalıştı");
  return x + y;
};
console.log(myFunction(10, 20));

const array = ["armut", "elma", "portakal", "kayısı"];

array.map((item) => {
  console.log(item);
});

//* Javascript Classes
class ClassName {
  constructor() {}
}

class Person {
  constructor(firstName, lastName) {
    this.x = firstName;
    this.y = lastName;
  }

  fullName() {
    return `${this.x} ${this.y}`;
  }
}

const person1 = new Person("Ali", "Test");
console.log(person1.fullName());

class Car {
  constructor(name, year) {
    this.name = name;
    this.year2 = year;
  }

  age(x) {
    return x - this.year2;
  }
}

const date = new Date();
let year = date.getFullYear();
console.log(year);

const myCar = new Car("Ford", 2022);
console.log(myCar.age(year));
