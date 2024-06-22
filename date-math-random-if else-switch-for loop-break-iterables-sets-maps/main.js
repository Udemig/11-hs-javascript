// //* Math

// let fiyat = 48.59;

// document.write("-- - -- - -- - -- --- - -- --- - -- --- - -- -", "<br/>");
// document.write("Fiyat:", fiyat, "<br/>");
// document.write("-- - -- - -- - -- --- - -- --- - -- --- - -- -", "<br/>");
// //* ceil:Yukarıya yuvarlar.
// document.write("ceil:", Math.ceil(fiyat), "<br/>");
// //* floor:Aşağıya yuvarlar
// document.write("floor:", Math.floor(fiyat), "<br/>");
// //* round:En yakın değere yuvarlar
// document.write("round:", Math.round(fiyat), "<br/>");
// //* trunc:Tam kısmını alır
// document.write("trunc:", Math.trunc(fiyat), "<br/>");
// //* sign:İçerisine gönderilen sayı pozitif ise 1 dönderir değilse -1 dönderir
// document.write("sign:", Math.sign(fiyat), "<br/>");
// //* pow:Sayının üssünü almak için kullanılır
// document.write("pow:", Math.pow(2, 3), "<br/>");
// //* sqrt:Sayının karekökünü alır
// document.write("sqrt:", Math.sqrt(4), "<br/>");
// //* abs:Sayının mutlak değerini alır
// document.write("abs:", Math.abs(-10), "<br/>");
// //* random:Rastgele sayı üretmek için kullanılır.Math.trunc ya da parseInt ile sayının tam sayı kısmı alınır.
// document.write("random:", Math.trunc(Math.random() * 10), "<br/>");

// let askerlikYasiMi = false; // true 1, false 0
// let askerlikYasiMi1 = new Boolean(true);

// document.write("askerlikYasiMi1:", askerlikYasiMi1, "<br/>");

// document.write("-- - -- - -- - -- --- - -- --- - -- --- - -- -", "<br/>");

// let yas = 18;

// document.write("Yaş:", yas, "<br/>");
// document.write("-- - -- - -- - -- --- - -- --- - -- --- - -- -", "<br/>");

// if (yas > 17) {
//   document.write("17 yaşından büyüktür.", "<br/>");
// }

// if (yas >= 18) {
//   document.write("Yaş 18'dir veya 18 yaşından büyüktür.", "<br/>");
// }
// //* `==`:Sadece içerisindeki değeri kontrol eder.Tip denetlemesi yapmaz.
// if (yas == "18") {
//   document.write("Yaşı 18'dir.", "<br/>");
// }

// if (yas != 19) {
//   document.write("Yaşı 19 değildir.", "<br/>");
// }
// //* `===`:Hem veri tipini hem de değerini kontrol eder.
// if (yas === 18) {
//   document.write("Yaşı 18'dir.", "<br/>");
// }
// //* Şartın true olduğu durumda if bloğu çalışır, şartın false olduğu durumda else bloğu çalışır.
// if (yas > 18) {
//   document.write("18 yaşından büyüktür.", "<br/>");
// } else {
//   //* if çalışmadığında çalışır.if çalışırsa else çalışmaz
//   document.write("Yaş 18'den büyük değildir.", "<br/>");
// }

// if (yas > 18) {
//   document.write("18 yaşından büyüktür.");
// } else if (yas === 18) {
//   document.write("Yaşı 18'dir.", "<br/>");
// } else {
//   document.write("Yaşı 18'den küçük ve 18 değildir.");
// }

// /*
//  * Kullanıcıdan toplanmak üzere iki tam sayı değer alınız ve bu iki değeri toplayıp console a yazdırınız.
//  */

// // const number1 = parseInt(prompt("Birinci sayıyı giriniz"));
// // const number2 = parseInt(prompt("İkinci sayıyı giriniz"));

// // const result = number1 + number2;
// // console.log("Toplam:", result);

// /*
//     * Kullanıcıdan  bir sayı alınıyor.Daha sonra makine 1 ile 100 arasında rastgele bir sayı üretiyor.
//     * Eğer makinanın ürettiği sayı ile kullanıcının girdiği sayı aynı ise ekrana `kazandınız` değilse `kaybettiniz` yazan
//     * bir uygulama yapınız.

// */
// // Yasin'in örneği
// // const randomNumber = parseInt(Math.random() * 100);
// // console.log(randomNumber);
// // const number = Number(prompt("Lütfen bir sayı giriniz."));
// // if (randomNumber === number) {
// //   document.write("Kazandınız");
// // } else {
// //   document.write("Kaybettiniz.");
// // }

// // const rDeger = parseInt(Math.random() * 100) + 1;
// // console.log(rDeger);

// // const kSayi = parseInt(prompt("Sayı tahmininiz nedir?"));

// // if (kSayi == rDeger) {
// //   console.log("Kazandınız");
// // } else {
// //   console.log("Kaybettiniz");
// // }

// const gun = 0;

// // switch (gun) {
// //   case 0:
// //     document.write("pazar");
// //   // break;
// //   case 1:
// //     document.write("pazartesi");
// //     break;
// //   case 2:
// //     document.write("sali");
// //     break;
// //   case 3:
// //     document.write("çarşamba");
// //     break;
// //   case 4:
// //     document.write("perşembe");
// //     break;
// //   case 5:
// //     document.write("cuma");
// //     break;
// //   case 6:
// //     document.write("cumartesi");
// //     break;
// //   default:
// //     document.write("Bilinmeyen gün");
// //     break;
// // }

// /*
//     * Bir öğrencinin(dışardan al/kullanıcıdan) ders notlarından vizenin %40 ını finalin %60 ını alarak ortalamasını hesaplarız.
//     * Eğer ortalama 50 altı ise ekrana "kaldı" değilse "geçti" ve hangi notla geçtiğide gösteren bir program yazınız.
//     * 50-60 arası DC
//     * 60-70 arası CC
//     * 70-80 arası CB
//     * 80-90 arası BB
//     * 90-95 arası BA
//     * 95 ve devamı AA olarak çıktıda belirtilmelidir.
//     ! Final notu 50 altındaysa yine kaldınız.

// */

// // const vize = parseInt(prompt("Vize notu"));
// // const final = parseInt(prompt("Final notu"));
// // console.log("Vize:", vize);
// // console.log("Final:", final);

// // const ort = vize * 0.4 + final * 0.6;
// // console.log("Ortalama:", ort);

// // if (final < 50 || ort < 50) {
// //   console.log("Kaldınız!!!");
// // } else {
// //   if (ort < 60) {
// //     console.log("DC ile geçtiniz");
// //   } else if (ort < 70) {
// //     console.log("CC ile geçtiniz");
// //   } else if (ort < 80) {
// //     console.log("CB ile geçtiniz");
// //   } else if (ort < 90) {
// //     console.log("BB ile geçtiniz");
// //   } else if (ort < 95) {
// //     console.log("BA ile geçtiniz");
// //   } else {
// //     console.log("AA ile geçtiniz");
// //   }
// // }

// let yeniYas = 10;

// let ehliyetDurumu = yeniYas >= 18 ? "ehliyetli" : "ehliyetsiz";

// document.write("Ehliyet Durumu:", ehliyetDurumu, "<br/>");

// //* for

// const meyveler = ["uzum", "elma", "kayısı", "kivi"];

// for (i = 2; i < meyveler.length; i++) {
//   document.write("index", " ", i, " ", "meyve:", meyveler[i], "<br/>");
// }

// // const arabalar = ["Volvo", "BMW", "Mercedes", "Ford"];

// // const arabalar1 = arabalar.map(function (item) {
// //   return item + " " + "araç modelleri";
// // });
// // console.log(arabalar1);

// //* for in sırasını verir
// for (deger in meyveler) {
//   console.log(deger);
//   document.write("-- - -- - -- - -- --- - -- --- - -- --- - -- -", "<br/>");
//   document.write("index", " ", deger, " ", "meyve:", meyveler[deger], "<br/>");
// }
// //* for of değerlerini direkt atar
// for (deger of meyveler) {
//   console.log(deger);
// }

// //* While Döngüsü(Loop)
// //* Belirli bir koşul sağlandığı sürece tekrarlanan bir döngü yapısıdır
// let sayi = 0;

// // while (sayi <= 10) {
// //   console.log(sayi);
// //   sayi++;
// // }

// let count = 0;

// while (count < 10) {
//   if (count === 5) {
//     break; // count 5 olduğunda döngüden çık >> break:Programın belirli bir bloğundan çıkmak veya döngüyü anında sonlandırmak için kullanılan bir ifadedir.
//   }
//   console.log(count);
//   count++;
// }

// let input;
// let toplam = 0;
// let toplanacakSayilar = [];

// // do whiledan önce mutlaka 1 kere çalışır
// // do {
// //   input = Number(prompt("Çıkmak için 0'a basın"));

// //   if (input !== 0) {
// //     toplam = toplam + input;
// //     toplanacakSayilar.push(input);
// //   }
// // } while (input !== 0);
// // console.log(toplam);
// // console.log(toplanacakSayilar);

// for (let i = 0; i <= 10; i++) {
//   console.log("çalıştı", i);
//   if (i === 5) {
//     console.log("i 5'e eşit olduğu için break ile döngüyü bitirdik");
//     break;
//   }
// }

// let depo = [];

// /*
//  * continue => Belirli bir koşulu sağlayan durumlarda, döngü içindeki bir kod bloğunu atlamak için kullanılır.
//  */

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//     console.log("atlanacak kısımlar", i);
//   }

//   if (i === 9) {
//     continue;
//   }

//   console.log("i değerleri", i);
//   depo.push(i);
// }
// console.log("depo>>", depo);

// /* iterables */

// const colors = ["red", "green", "orange"];

// for (const renk of colors) {
//   console.log("renk =>", renk);
// }

// // let text = "Merhaba 11.sezon";
// // string üzerinde döngü oluşturma
// // for (const karakter of text) {
// //   console.log("Karakter=>", karakter);
// // }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // for (let value of numbers) {
// //   if (value % 2 === 1) {
// //     console.log(value);
// //   }
// // }

// for (let number of numbers) {
//   if (number % 2 === 0) {
//     console.log(number);
//   }
// }

// const text = "11.sezon hafta sonu";
// const benzersizKarakter = [];

// for (const char of text) {
//   if (!benzersizKarakter.includes(char)) {
//     benzersizKarakter.push(char);
//   } else {
//     console.log("char", char, "Bu karakter zaten senin dizinde var");
//   }
// }

// console.log("Farklı harfler >>", benzersizKarakter);

// for (const char of benzersizKarakter) {
//   console.log("char", char);
// }

// const metin = "11.sezon hafta içi 423423 hoşgeldiniz!Bugün ayın 22 sidir";
// const rakamlar = [];

// for (var karakter of metin) {
//   if (Number(karakter)) {
//     rakamlar.push(karakter);
//     console.log("rakam olan karakter", karakter);
//   }
// }
// console.log(rakamlar);

/*
 * Set => Benzsersiz değerleri saklamak için kullanılır
 */
// set oluşturma
const mySet = new Set();
// set'e eleman ekleme
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(1);
mySet.add(3);
mySet.add(3);
mySet.add(3);
mySet.add(3);
mySet.add(3);
mySet.add(3);
mySet.add(4);

console.log("mySet>>", mySet);
console.log("mySet eleman sayısı>>", mySet.size);

for (const item of mySet) {
  console.log("item", item);
}

console.log(mySet.has(2)); // true gelir bu değer içerisinde bulunuyor
console.log(mySet.has(5)); // false gelir bu değer içerisinde bulunmuyor

mySet.delete(2); // silme işlemi için delete kullanılır
console.log("Silme işlemi sonrasında set>>", mySet);

mySet.forEach(function (item) {
  console.log("foreach ile item", item);
});
mySet.clear(); // seti temizlemek için kullanılır
console.log(mySet);

const myMap = new Map();
/*
  Bir anahtar değer çiftlerini depolamak için kullanılır.
  Herbir anahtar benzersiz olmalıdır.
*/
myMap.set("apple", "15 Tl");
myMap.set("apple", "10 Tl");
myMap.set("orange", "20 Tl");
myMap.set("banana", "15 Tl");
myMap.set("apple", "1 Tl");

console.log(myMap);

// Değerlere erişim sağlarken get metodu kullanılır ve bizden key ister
console.log(myMap.get("apple"));
// Boyutunu kontrol etmek için kullanılır
console.log(myMap.size);
// Map içindeki anahtar-değer çiftlerini döngüyle gezinme
myMap.forEach(function (value, key) {
  console.log(`${key} fiyatı => ${value}`);
});
// Bir anahtarın mapte olup olmadığını kontrol ederiz
console.log(myMap.has("apple"));
console.log(myMap.has("chery"));
// Bir anahtar-değer çifti silmek için kullanırız.
myMap.delete("orange");
console.log(myMap);
// Tüm anahtar-değer çiftlerini temizler
myMap.clear();
console.log(myMap);

/*******************************************************************/
// primitive data (ilkel veri tipi)
// string,number,boolean,undefined,null,bigint,symbol

let name = "veli";
let age = 30;
let isStudent = false;
let telNo = null;

// complex data (karmaşık veri tip)

let person = {
  name: "Veli",
  age: 30,
  city: "Samsun",
};
let products = ["Elma", "Armut", "Portakal"];
let orders = [
  {
    product: "Telefon",
    price: 1000,
  },
  {
    product: "Bilgisayar",
    price: 2000,
  },
];

console.log(name);
console.log(person.age);
console.log(products[0]);
console.log(orders[0].product);
