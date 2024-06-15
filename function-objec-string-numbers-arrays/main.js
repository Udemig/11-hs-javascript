// function calis() {
//   let name1 = "test";
//   let ilk = 2;
//   let ikinci = 3;
//   let toplamimiz = ilk + ikinci;
//   document.write("Toplam:", toplamimiz, "<br/>");
// }
// // console.log(name1);
// calis();

// function cikar(ilkDeger, ikinciDeger) {
//   let sonuc = ilkDeger - ikinciDeger;
//   document.write("Sonuç:", sonuc, "<br/>");
// }

// cikar(20, 2);
// const fn = cikar(3, 1);
// // console.log(fn);

// /*
//  * propmt ekrana input kutucuğu açmayı sağlar.
//  */
// // let kullaniciDegeri = prompt("Sayısal değer gir");
// // console.log(kullaniciDegeri);

// function carpBunlari(number1, number2) {
//   let sonuc = number1 * number2;
//   return sonuc;
// }

// let anlikSonuc = carpBunlari(10, 2);
// console.log(anlikSonuc);

// // console.log(sonuc);

// const araba = {
//   ad: "Volvo",
//   renk: "siyah",
//   calis: function () {
//     document.write("Araç çalışıyor.", "<br/>");
//   },
//   model: 2023,
//   durdur: function () {
//     document.write("Araç durdu", "<br/>");
//   },
// };
// console.log(araba);
// araba.calis();
// document.write("Marka:", araba.ad, "<br/>");
// araba.durdur();

// document.write("Model:", araba["model"], "<br/>");
// document.write("Renk:", araba["renk"], "<br/>");

// function girisYapti() {
//   alert("Tebrikler giriş yaptınız.");
// }

// /*
//     * onClick:Etikete tıklanıldığında çalışır.
//     * onChange:HTML elementi değiştiğinde çalışır.
//     * onLoad:Ekran yüklendiği anda çalışır.
//     * onMouseOver:Fare üzerine geldiğinde çalışır.
//     * onMouseOut:Fare üzerinden gittiğinde çalışır.

// */

// //! String
// let adSoyad = "Ömer Benim adım  Ömer senin adın ne? Ömer";
// let boolean = "true";
// document.write("Ad Soyad:", adSoyad, "<br/>");

// let yeniAd = new String("Ahmet Unver");
// document.write("yeni ad:", yeniAd, "<br/>");

// //todo String Metotlar
// let adSoyad1 = "Ahmet Unver";
// let ad = "    Azat   ";
// let soyad = "Algül";
// // Uzunluk:length
// document.write("Uzunluk için length kullanılır:", adSoyad1.length, "<br/>");
// // Alt metin oluşturur:substring
// document.write("Alt metin:", adSoyad1.substring(5), "<br/>");
// // Aralık olarak metin alma
// document.write("Aralık olarak metin alma:", adSoyad1.substring(5, 10), "<br/>");
// // Slice metodu bizden iki değer ister:Birincisi keseceği aralığın başlangıç değeri, ikincisi bitiş değeridir.
// document.write("Belirlenen aralığı alma:", adSoyad1.slice(2, 9), "<br/>");
// // 5'inci karakterden sonrasını alır
// document.write("Belirlenen aralığı alma:", adSoyad1.slice(5), "<br/>");
// // İlk parametre değeri ile ikincisini değiştirir.(ilk gördüğü değerde çalışır)
// document.write("replace:", adSoyad.replace("Ömer", "Ahmet"), "<br/>");
// // İlk parametre değerinde bulduklarının hepsini ikinci parametre olarak değiştirir.
// document.write("replaceAll:", adSoyad.replaceAll("Ömer", "Ahmet"), "<br/>");
// // Verilen değerin bütün harflerini büyük yapar.
// document.write("toUpperCase:", adSoyad1.toUpperCase(), "<br/>");
// // Verilen değerin bütün harflerini küçük yapar.
// document.write("toLowerCase:", adSoyad1.toLowerCase(), "<br/>");
// // Birden fazla metni birleştirmek için concat kullanabiliriz.
// document.write("concat:", ad.concat(" Algül", "asasdads", soyad), "<br/>");
// // Başındaki ve sonundaki boşlukları kaldırmak için trim kullanılır.
// // console.log("ad:", ad.trim());
// // Başındaki boşlukları kaldırır.
// console.log("ad:", ad.trimStart());
// // Sonundaki boşlukları kaldırır.
// console.log("ad:", ad.trimEnd());

// //todo String Search
// let adSoyad2 = "Benim adım 'Ali' senin adın nE?";
// // İlk eşleşen harf/kelimenin sırasını getirir yoksa `-1` döner
// document.write("adSoyad2 search:", adSoyad2.search("adım"), "<br/>");
// // İlk eşleşen harf/kelimenin sırasını getirir yoksa `-1` döner
// document.write("adSoyad2 indexOf:", adSoyad2.indexOf("ad"), "<br/>");
// // Sağdan başlayıp ilk eşleşen harf/kelimenin sırasını getirir.Yoksa `-1` döner
// document.write("adSoyad2 lastIndexOf:", adSoyad2.lastIndexOf("ad"), "<br/>");
// // Varsa kelimenin kendisini getirir.Yoksa null çevirir.null boş demektir.
// document.write("adSoyad2 match:", adSoyad2.match("ad"), "<br/>");
// // Cümle ilgili parametre ile başlıyorsa true dönderir, başlamıyorsa false dönderir.
// document.write("adSoyad2 startsWith:", adSoyad2.startsWith("B"), "<br/>");
// // 2.paremtredeb itibaren belirtilen kelime ile cümle başlıyorsa true yoksa false çevirir.
// document.write("adSoyad2 startsWith:", adSoyad2.startsWith("Ali", 12), "<br/>");
// // Cümlenin bitiş değeri parametre ile eşleşiyorsa true dönderir, yoksa false dönderir.
// document.write("adSoyad2 endsWith:", adSoyad2.endsWith("e?"), "<br/>");

// //todo Literals Templates

// let name1 = "Hasan ";
// let surname = "Kayar";
// let yas = 23;

// let birlestirilmis = `Selam benim adım ${name1}.Soyadım ${surname}.Yaşım ${yas}.`;
// document.write(birlestirilmis, "<br/>");

// let price = 20;
// let amount = 4;

// let total = `Total:${price * amount}`;
// document.write(total, "<br/>");

// let header = "Başlık";
// //todo HTML Templates
// let html = `<h2>${header}</h2>`;
// let html1 = `<h1>${header}</h1>`;
// document.write(html, "<br/>");
// document.write(html1);

// //! Numbers
// //* Gelen parametre bir sayı değilse true dönderir sayı ise false dönderir
// document.write("isNaN:", isNaN(surname), "<br/>");

// let yeniYas = "2" + 20;
// let yeniYas1 = 2 + 20;
// // toString metodu kullanarak numberı stringe çeviririz.
// let stringSayi = yeniYas1.toString();
// console.log(stringSayi);
// document.write("Yeni Yaş:", yeniYas, "<br/>");
// document.write("Yeni Yaş1:", yeniYas1, "<br/>");

// let sayimiz = new Number(10);
// console.log(sayimiz);

// let yeniSayi = 890428309089230489230424;
// let yeniSayi2 = BigInt(999999999);
// console.log(yeniSayi2);

// document.write("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER, "<br/>");
// document.write("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER, "<br/>");

// let etFiyati = 659.98932479823;
// // Noktadan sonra kaç basamak geleceğini belirlemek için toFixed methodu kullanılır.
// document.write("toFixed:", etFiyati.toFixed(4), "<br/>");
// // İçerisine gönderdiğimiz parametreye göre basamakları getirir.
// document.write("toPrecision:", etFiyati.toPrecision(8), "<br/>");
// // Ondalıklı sayının tam kısmını alır
// document.write("parseInt:", parseInt(etFiyati), "<br/>");

// //! Sayıyı metne çevirme yöntemleri
// let etString = new String(etFiyati);
// let etString1 = etFiyati + "";
// let etString2 = etFiyati.toString();
// console.log(etString);
// console.log(etString1);
// console.log(etString2);

// //! Metni sayıya çevirme yöntemleri

// let kitapFiyat = "20.234";

// let kitapNumber = new Number(kitapFiyat);
// let kitapNumber1 = parseInt(kitapFiyat); // tam sayı kısmını alır
// let kitapNumber2 = Number.parseFloat(kitapFiyat); // ondalıklı olarak verir

// console.log(kitapNumber);
// console.log(kitapNumber1);
// console.log(kitapNumber2);

// // isInteger metodu içerisine gönderilen değer tam sayı ise true dönderir değilse false dönderir
// document.write("isInteger:", Number.isInteger(kitapFiyat), "<br/>");
// document.write("isInteger:", Number.isInteger(kitapNumber1), "<br/>");

// document.write("Number MAX_VALUE:", Number.MAX_VALUE, "<br/>");
// document.write("Number MIN_VALUE:", Number.MIN_VALUE, "<br/>");

// //! Arrays - Diziler
// const arabalar = ["Volvo", "BMW", "Mercedes", "Ford"];

// document.write("-- - - - -- - - - --- - - - - - -- -", "<br/>");
// document.write("arabalar:", arabalar, "<br/>");
// document.write("arabalar:", arabalar[0], "<br/>");
// document.write("arabalar:", arabalar[1], "<br/>");
// document.write("arabalar:", arabalar[2], "<br/>");
// document.write("arabalar:", arabalar[3], "<br/>");
// document.write("arabalar length:", arabalar.length, "<br/>");
// //* Dizinin sonuna eleman eklemek için push methodu kullanılır.
// arabalar.push("Togg");
// document.write("arabalar:", arabalar, "<br/>");
// //* Dizinin sonundan eleman çıkarmak için pop kullanılır.
// arabalar.pop();
// document.write("arabalar:", arabalar, "<br/>");

// // arabalar[7] = "Togg";
// document.write("arabalar:", arabalar, "<br/>");

// //* Shift metodu dizinin başındaki elemanı kaldırır.Değişkene atarsanız çıkardığınız elemana ulaşırsınız.
// let eleman = arabalar.shift();
// document.write("Çıkarılan eleman", eleman, "<br/>");
// document.write("arabalar:", arabalar, "<br/>");
// //* Dizinin başına içerisine gönderilen parametreye göre eleman ekler.
// arabalar.unshift("Fiat");
// document.write("arabalar:", arabalar, "<br/>");

// const isimler = ["Emre", "Aysun", "Arzu", "Erol", "Mehmet", "Nisa"];
// const ulkeler = ["tr", "sw", "fr", "eng", "usa"];

// document.write(
//   "Birleştirme işlemi:",
//   arabalar.concat(isimler, ulkeler),
//   "<br/>"
// );

// const yeniSayilarimiz = [
//   [1, 2, 5],
//   [3, 4, 7],
//   [6, 8, 9],
// ];
// console.log(yeniSayilarimiz);

// document.write("yeniSayilar:", yeniSayilarimiz[0], "<br/>");
// document.write("yeniSayilar:", yeniSayilarimiz[1], "<br/>");
// document.write("yeniSayilar:", yeniSayilarimiz[2], "<br/>");
// //* Alt dizinin elemanlarını tek dizi haline getirir.
// let yeniSayilarimizFlat = yeniSayilarimiz.flat();
// console.log(yeniSayilarimizFlat);
// document.write("yeniSayilarimizFlat:", yeniSayilarimizFlat, "<br/>");
// document.write(
//   "********************************************************************",
//   "<br/>"
// );

// document.write("arabalar:", arabalar, "<br/>");
// document.write(
//   "********************************************************************",
//   "<br/>"
// );
// //* ilk parametre başlangıç,ikincisi silinecek eleman sayısı,diğerleri ise eklenilecek olanlardır
// arabalar.splice(2, 1, "mazda", "mango");
// document.write("arabalar:", arabalar, "<br/>");
// //* Belirtilen indexten verileri getirir.
// document.write("arabalar:", arabalar.slice(3), "<br/>");
// document.write("arabalar:", arabalar.slice(0, 2), "<br/>");
// console.log(arabalar);
// //* Metine dönüştürüp verir.
// console.log(arabalar.toString());
// //* Sıralamayı alfabeye göre yapar.
// document.write("arabalar sort:", arabalar.sort(), "<br/>");
// //* Diziyi ters çevirmek için reverse kullanılır.
// document.write("arabalar reverse:", arabalar.reverse(), "<br/>");

// var guncelPuanlar = [10, 7, 29, 99, 102, 87, 64, 54];

// //* Gönderilen fonksiyon ile sıralama yapılır.İlk - ikinci parametre şeklinde küçükten büyüğe veya tersi durumda ters sıralama olur.
// document.write(
//   "Güncel Puanlar:",
//   guncelPuanlar.sort(function (a, b) {
//     return b - a;
//   }),
//   "<br/>"
// ),
//   document.write(
//     "Güncel Puanlar min:",
//     Math.min.apply(null, guncelPuanlar),
//     "<br/>"
//   );
// document.write(
//   "Güncel Puanlar max:",
//   Math.max.apply(null, guncelPuanlar),
//   "<br/>"
// );

// document.write(
//   "********************************************************************",
//   "<br/>"
// );

// document.write("arabalar:", arabalar, "<br/>");
// document.write(
//   "********************************************************************",
//   "<br/>"
// );
// console.log(
//   "------------------------------------------------------------------------"
// );
// console.log(arabalar);
// arabalar.forEach(degerleriGez);
// function degerleriGez(value, index, array) {
//   console.log("value", value);
//   console.log("index", index);
//   console.log("array", array);
// }

// const arabalarr = arabalar.forEach(function (item) {
//   console.log(item);
//   return item;
// });
// console.log(arabalarr);
// const arabalar1 = arabalar.map(function (item) {
//   console.log(item);
//   return item + " " + "son model";
// });
// console.log(arabalar1);
// //* map her döndüğü dizi elemanı için yeni bir dizi oluşturur, forEach ise tüm elemanları gezer.

// const arabalar2 = arabalar.flatMap(degerleriGezMap);

// function degerleriGezMap(value) {
//   return value + " " + "marka";
// }
// console.log(arabalar2);
// //* map her döndüğü dizi elemanı için yeni bir dizi oluşturur, flatmap ise tüm elemanları gezdikten sonra sonucu bir diziye ekler ve ikiside sonuç olarak bir dizi geriye dönderir

const sayilar = [11, 51, 61, 71, 81, 91, 21];

document.write(sayilar, "<br/>");
// soldan sağa gezerek değerleri birleştirerek tek bir değer verir
// let toplam = sayilar.reduce(topla);
// sağdan değerler üzerinde işlem yaparak tek bir sonuç dönderir
// let toplamSag = sayilar.reduceRight(topla);
// function topla(total, value, index, array) {
//   console.log(total);
//   console.log(value);
//   console.log(index);
//   console.log(array);
//   return total + value;
// }
// document.write(toplam, "<br/>");
// document.write(toplamSag, "<br/>");

function kontrolEt(value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
  return value < 10;
}
// Liste içinde olan tüm elemanların bir kural için geçerli olup olmadığını true,false çevirerek söyler
let gecerliMi = sayilar.every(kontrolEt);
document.write(gecerliMi, "<br/>");
// dizinin ilk elemanı belirtilen kuralil sağlıyorsa kendisini
// sağlamıyorsa undefined dönderir
let gecerliMi1 = sayilar.find(kontrolEt);
document.write(gecerliMi1, "<br/>");
// dizi içinde bulunan değerlden en az bir tanesi
// belirtilen kurali sağlıyorsa true değilse false çevirir
let gecerliMi2 = sayilar.some(kontrolEt);
document.write(gecerliMi2, "<br/>");

const meyveler = ["üzüm", "elma", "armut", "muz", "kivi"];

document.write("Meyveler:", meyveler, "<br/>");

document.write("meyveler indexOf:", meyveler.indexOf("üzüm"), "<br/> ");
document.write("meyveler indexOf:", meyveler.indexOf("armut"), "<br/> ");
document.write("meyveler indexOf:", meyveler.indexOf("kivi"), "<br/> ");
// document.write("meyveler lastIndexOf:", meyveler.lastIndexOf("kivi"), "<br/> ");

const isimler = ["ali", "ayse", "veli"];
document.write("isimler:", isimler, "<br/>");

isimler[1] = "tesst";
document.write("isimler:", isimler, "<br/>");

const tarih = new Date();
console.log(tarih);

document.write(tarih.getDate(), "<br/>");
document.write(tarih.getDay(), "<br/>");
document.write(tarih.getFullYear(), "<br/>");
document.write(tarih.getHours(), "<br/>");
document.write(tarih.getMinutes(), "<br/>");
document.write(tarih.getMonth(), "<br/>");
document.write(tarih.getSeconds(), "<br/>");
document.write(tarih.getMilliseconds(), "<br/>");
document.write(tarih.getTime(), "<br/>");
