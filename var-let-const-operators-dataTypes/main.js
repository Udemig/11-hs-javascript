// Body ekranına yazdırmak için bu kod kullanılır.
document.write("Merhaba Dünya" + "<br/>");

/*
    console arka plana çıktı verir
*/

console.log("console çalıştı");
console.log("test");
//* Uyarı kutucuğudur.
// alert("Bu siteye giriş yaptınız.");

/*
 * Değişken tanımlamak için kullanılan anahtar kelimeler:
 * 1.var
 * 2.let
 * 3.const:Tanımlandıktan sonra farklı bir değer atanamaz.
 */

var adim = "Yasin";
document.write("İsim:" + adim + "<br/>");

adim = "Serhat";
document.write("İsim" + adim + "<br/>");

number = 20;
document.write("Sayı:" + number + "<br/>");

var yas;
yas = 20;
document.write("Yaş:" + yas + "<br/>");

var nereli = "Antalya";
document.write("Nereli:" + nereli + "<br/>");

var ulke1 = "Türkiye",
  ulke2 = "Danimarka",
  ulke3 = "Fransa";

let meslek = "Kuaför";
document.write("Meslek:" + meslek + "<br/>");

meslek = "Mühendis";
document.write("Meslek:" + meslek + "<br/>");

const PI = 3.14;
document.write("PI:" + PI + "<br/>");
console.log("pi:", PI);
// PI = 3.14234234234234; hata verir

//! Javascript Operators
let sayi1 = 10;
let sayi2 = 4;

let toplam = sayi1 + sayi2;
document.write("toplam:", toplam, "<br/>");

let cikar = sayi1 - sayi2;
document.write("çıkarma:", cikar, "<br/>");

let carp = sayi1 * sayi2;
document.write("çarpma:", carp, "<br/>");

let bolme = sayi1 / sayi2;
document.write("bölme", bolme, "<br/>");
//* mod alma(%) bir sayının diğer bir sayıya bölümünden kalanını verir
let mod = sayi1 % sayi2;
document.write("mod:", mod, "<br/>");

let yeniSayi = 4;

document.write(
  "-------- -- - - -- - - -- --------- -- - - -- - - -- --------- -- - - -- - - -- - " +
    "<br/>"
);

document.write("yeni sayı:", yeniSayi, "<br/>");

yeniSayi++; // yeniSayi = yeniSayi + 1
yeniSayi++; // yeniSayi = yeniSayi + 1
document.write("yeniSayimiz:", yeniSayi, "<br/>");

document.write(
  "-------- -- - - -- - - -- --------- -- - - -- - - -- --------- -- - - -- - - -- - " +
    "<br/>"
);

yeniSayi--;
yeniSayi--;
yeniSayi--;
document.write("yeniSayimiz:", yeniSayi, "<br/>");

document.write(
  "-------- -- - - -- - - -- --------- -- - - -- - - -- --------- -- - - -- - - -- - " +
    "<br/>"
);

yeniSayi += 10; // yeniSayi = yeniSayi + 10
document.write("yeniSayimiz:", yeniSayi, "<br/>");

yeniSayi -= 4; // yeniSayi = yeniSayi - 4
document.write("yeniSayimiz:", yeniSayi, "<br/>");

yeniSayi *= 7; // yeniSayi = yeniSayi * 7
document.write("yeniSayimiz:", yeniSayi, "<br/>");

yeniSayi /= 3; // yeniSayi = yeniSayi / 3
document.write("yeniSayimiz:", yeniSayi, "<br/>");

yeniSayi %= 2; // yeniSayi = yeniSayi % 2
document.write("yeniSayimiz:", yeniSayi, "<br/>");

document.write(
  "-------- -- - - -- - - -- --------- -- - - -- - - -- --------- -- - - -- - - -- - " +
    "<br/>"
);

let sayiBir = 3;
let sayiİki = 4;

document.write("Eşit mi?", sayiBir == sayiİki, "<br/>");
document.write("Eşit mi?", sayiBir == 3, "<br/>");
document.write("Eşit mi?", sayiBir != 4, "<br/>");
document.write("Büyük mü?", sayiBir > 2, "<br/>");
document.write("Küçük mü?", sayiBir < 4, "<br/>");
document.write("Büyük eşit mi?", sayiBir >= 3, "<br/>");
document.write("Küçük eşit mi?", sayiBir <= 3, "<br/>");

document.write("ve:" + (sayiBir == 3 && sayiİki == 3) + "<br/>");
document.write("veya:" + (sayiBir == 3 || sayiİki == 3) + "<br/>");

let deger1 = 2;
let deger2 = "2";

document.write("Eşit mi?", deger1 == deger2, "<br/>");
document.write("Eşit mi?", deger1 === deger2, "<br/>"); // üç eşittir tür denetlemesi yapar

document.write("topla:", deger1 + deger2, "<br/>");

let toplamcik = 2 + "8";
document.write("toplam:", toplamcik, "<br/>");
let yeniToplamcik = 2 + 8;
document.write("yeniToplamcik:", yeniToplamcik, "<br/>");

//! Datatypes
// undefined tanımmsız
let name = "Ali"; // string
let date = 2024; // number
let yetiskinMi = true; // boolean >> true,false
const cars = ["Volvo", "Mercedes", "Ford"]; // arrays >> diziler
document.write("Cars:", cars, "<br/>");
document.write("Sırayla getir:", cars[0], "<br/>");
document.write("Sırayla getir:", cars[1], "<br/>");
document.write("Sırayla getir:", cars[2], "<br/>");

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.write("Number:", numberArray, "<br/>");
document.write("Number:", numberArray[50], "<br/>");
// Object
const person = {
  firstName: "İsmail",
  lastName: "Doğan",
  age: 24,
};
document.write("Kullanıcı İsmi:", person.firstName, "<br/>");
document.write("Kullanıcı İsmi:", person.lastName, "<br/>");
document.write("Kullanıcı İsmi:", person.age, "<br/>");
