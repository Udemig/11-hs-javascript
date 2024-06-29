//! Object
function Person(name, age) {
  this.name = name;
  this.age = age;
}
//* Person constructor'ının prototype'ına bir method ekledik.
Person.prototype.sayHello = function () {
  console.log(`Merhaba, ben ${this.name} ve ${this.age} yaşındayım.`);
};

//* Örnek(instance) oluşturalım
let person1 = new Person("Yasin", 17);

person1.sayHello();

Person.prototype.country = "Turkey";

let person2 = new Person("Ayşe", 22);

console.log(person2.country);

//* Object Methods

let person = {
  firstName: "Aziz",
  lastName: "Polat",
  age: 24,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  greet: function (greeeting) {
    return `${greeeting}, ${this.firstName}`;
  },
};

console.log(person.lastName);
console.log(person.fullName());
//* anahtar-değer çiftleri şeklinde bir dizi olarak dönderir
let entries = Object.entries(person);

console.log(entries);

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

const myMap = new Map(Object.entries(fruits));
console.log(myMap);

let entries1 = [
  ["Bananas", 300],
  ["Oranges", 300],
  ["Apples", 200],
];
//* anahtar-değer çiftleri şeklinde gelen bir diziyi bize obje olarak dönderir
//* entries metodunun tam tersidir
let obj = Object.fromEntries(entries1);
console.log(obj);
console.log(obj.Apples);
//* keys metodu içerisine gönderilen objenin keylerini dizi olarak dönderir
console.log(Object.keys(person));
//* values metodu içerisine gönderilen objenin valuelarını dizi olarak dönderir
console.log(Object.values(person));

let obj1 = {};

Object.defineProperty(obj1, "name", {
  value: "Ali", // Özelliğin değeri
  writable: true, // Değiştirilebilir olup olmadığını belirtir
  enumerable: false, // fon..in döngüsü ya da Object.keys ile görünüp görünmeyeceğini belirtir
  configurable: true, // Özelliğin silinebilir, değiştirilebilir olup olmadığını belirtir
});
console.log(obj1);
//* Birden fazla özellik tanımlamak istersek kullanırız
Object.defineProperties(obj1, {
  name1: {
    value: "Veli",
    writable: true,
  },
  age: {
    value: 24,
    writable: false,
  },
});
console.log(obj1);
//* Bir nesnenin içindeki keylerin nasıl tanımlandığını incelemek ve değiştirmek için kullanırız
let descriptor = Object.getOwnPropertyDescriptor(obj1, "name");

console.log(descriptor);
//* Bir nesnenin içerisindeki bütün özelliklerin nasıl tanımlandığını incelemek için kullanırız
console.log(Object.getOwnPropertyDescriptors(obj1));

//* Nesneye yeni özellik eklenemesini engeller ancak var oaln özellikler üzerinden değişiklik yapılabilir.
// Object.preventExtensions(obj1);

// obj1.country = "Turkey";
// console.log(obj1);

//* preventExtensions ile aynı görevi görür ancak mevcut özelliklerin `configurable` özelliğini `false` olarak ayarlar.
// Object.seal(obj1);

obj1.country = "Turkey";
delete obj1.name;
console.log(obj1);

let object = {
  name: "test",
};
//* freeze özelliklerin değerlerinin değiştirilmesini engeller
Object.freeze(object);
object.name = "ali";
console.log(object);

let person3 = {
  firstName: "ali",
  lastName: "test",
  fullName5: function () {
    return this.firstName + " " + this.lastName;
  },
  //* Bir özelliğin istenen değerini dönderir
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  //* Bir özelliğin değerini ayarlamak için belirli işlemleri gerçekleştirir
  set fullName2(name) {
    let parts = name.split(" ");
    console.log(parts);
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person3.fullName);

person3.fullName2 = "Hasan Kayar";
console.log(person3.firstName);

console.log(person3.fullName5());

//! Funtion

function fnExample(parameters) {
  // Fonksiyonun yapacağı işlemler
  return 2; // Opsiyonel olarak bir değer döndürebilir
}

const myFunction = new Function("a", "b", "return a * b");
console.log(myFunction(4, 3));

console.log(toplama(5));

function toplama(a) {
  return a + a;
}

let text = toplama.toString();
console.log(text);

const toplama1 = (x, y) => {
  return x + y;
};

console.log(toplama1(4, 3));

const cikarma = (x, y = 10) => x - y;

console.log(cikarma(4));

function sum(...args) {
  console.log(args);
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(3, 4, 5, 76, 45, 8, 5, 4, 776, 35, 7, 53, 6, 2, 54);
console.log(x);

let y = fnExample_1();
console.log(y);

function fnExample_1() {
  return this;
}

const person5 = {
  firstName: "Berk",
  lastName: "test",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person_1 = {
  firstName: "Ali",
  lastName: "Yılmaz",
};
const person_2 = {
  firstName: "Veli",
  lastName: "Kaya",
};

console.log(person5.fullName.call(person_2));

const member = {
  firstName: "Mustafa",
  lastName: "Özmen",
};

let fullname = person5.fullName.bind(member);
console.log(fullname());

let counter = 0;
function add() {
  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}

add();
add();
console.log(add());

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age(x) {
//     const date = new Date();
//     return date.getFullYear() - x;
//   }
// }

// const myCar = new Car("Nissan", 2003);
// console.log(myCar.age(2022));

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "Ben bir" + this.carname + " " + "sahibiyim.";
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + " " + this.model;
//   }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());

class Car {
  constructor(brand) {
    this._carname = brand;
  }

  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
  static hello() {
    return "Merhaba";
  }
}

const myCar = new Car("Ford");
// myCar.carname = "Volvo";
console.log(myCar.carname);
// console.log(myCar._carname);

console.log(Car.hello());

function greeting(name, callback) {
  console.log(`Merhaba ${name}`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greeting("Test", sayGoodbye);

/*
 * En az bir fonksiyonu başka bir fonksiyona parametre olarak
 * gönderip daha sonra gerekli işlemlerden sonra parametre olarak
 * gelen fonksiyonun çağrılmasına callback denir
 */

function ekranaAdYaz() {
  console.log("çalıştı");
}

//* Belirli süre içinde bir fonksiyonu çalıştırır.
//* İlk parametre hangi fonksiyonu çalıştıracağı
//* İkinci parametre ne kadar süre sonra çalışacağını belirtir
// setTimeout(ekranaAdYaz, 1000);
/*
 * Tekrar eden şekilde berlitilen milisaynide belirtilen
 * fonksiyonun süreklli olarak çağrılmasıdır
 */
// setInterval(() => console.log("yeni ad"), 2000);

//! promise
/*
    * 2 adet parametre alır.İlk resolve(fulfilled) yani olumlu olması
    * ikincisi ise reject yani hata olduğunda çalışır.
    * 

*/
// const cozum = (param) => {
//   console.log(param);
// };
// const redEdilme = (param) => {
//   console.log(param);
// };

// let istek = new Promise(function (cozum, redEdilme) {
//   let ad = "test";
//   setTimeout(function (cozum, redEdilme) {
//     if (ad == "test") {
//       cozum("test çalıştı");
//     } else {
//       redEdilme("yol doğru değil");
//     }
//   });
// }, 5000);

/*
 * Promise Durumları
 * 1.Pending:Başlangıç durumu.İşlem henüz başlamamıştır.
 * 2.Fulfilled(Resolved):İşlem başarıyla tamamlandı.
 * 3.Rejected:İşlem başarısız oldu veya hata aldı.
 */

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let success = false;
//     if (success) {
//       resolve("İşlem başarıyla gerçekleşti");
//     } else {
//       reject("İşlem başarısız oldu");
//     }
//   }, 1000);
// });

// console.log(promise);

// promise
//   .then((message) => console.log("Başarılı", message))
//   .catch((error) => console.log("Hata", error));

let veriAlIstek = new Promise(function (cozum, redEdilme) {
  let req = new XMLHttpRequest(); // internete istek atıp veri alma/gönderimi alma

  req.open("GET", "https://jsonplaceholder.typicode.com/users");
  req.onload = function () {
    // istek geri döndüğünde
    if (req.status == 200) {
      // status 200 istek başarılı anlamına gelmektedir.
      cozum(req.response); // response istekle gelen cevaptır
    } else {
      redEdilme("yol bulunamadı");
    }
  };
  req.send(); // isteğin başlatılmasını sağlar
});

veriAlIstek
  .then((deger) => console.log(deger))
  .catch((err) => console.log(err));
/*

    * Async Await
    * Asenkron işlemleri daha okunabilir ve yönetilebilri hale getiren özelliklerdir
    * Bu yapılar, özellikler promiselerle yapılan asenkron işlemleri senkron gibi 
    * kodlamaya sağlar.
*/

async function girisYap() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Bitti"), 3000);
  });
  let result = await promise;
  alert(result);
}
girisYap();
