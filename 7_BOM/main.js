/* 
    ! BOM (Browser Object Model)

    * Web sayfasının dışında kalan tarayıcı penceresi ve sekmesi gibi tarayıcı özelliklerine erişim sağlar
*/

// console.log(window);

// const sinif3Elementler = document.getElementsByClassName("sinif1");
// console.log(sinif3Elementler);

// document.write(`genişlik: ${window.innerWidth} <br/>`);
// document.write(`yükseklik: ${window.innerHeight} <br/>`);

// let ekran;

// function ekranOlustur() {
//   /*
//         * Eğer gideceği yolu vermez boş bırakırsak yeni bir ekran açar.
//         * İlk yolu URL'dir.3.parametre açılacak olan ekranın özellikleridir.

//     */
//   ekran = window.open("", "", "width=800,height=400");
//   console.log(ekran);
// }

// function yenidenBoyutlandir() {
//   ekran.resizeTo(600, 600); // Direk olarak genişlik ve yükseklik vermemizi sağlar
// }

// function yenidenBoyutlandirBy() {
//   ekran.resizeBy(-100, -50); // Elimizde olan boyuta göre ekleme ve çıkarma yapar
// }

// setTimeout(() => {
//   // window.close();açılan sekmeyi kapatır
//   //   window.open("anasayfa.html");  verilen yola göre o sayfaya gider

//   ekranOlustur();
//   setTimeout(() => {
//     yenidenBoyutlandir();

//     setTimeout(() => {
//       yenidenBoyutlandirBy();

//       setTimeout(() => {
//         ekran.moveTo(-400, 500); // açılan ekranın x ve y koordinatlarını değiştirir
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

console.log(window.location); // tarayıcının lokasyonu ile alakalı tüm nesneleri veren yapıdır
console.log(location.href); // tüm yolu verir
console.log(location.hostname); // site adı,baseURL, asıl adres
console.log(window.history);
const anasayfayaGit = () => {
  // sekmenin kendi içinde sayfa açılması için href olarak verilmeli
  location.href = "anasayfa.html";
};

const ileriyeGit = () => {
  window.history.forward();
};

console.log(navigator);
//* cookie tarayıcı üzerinde çeşitli bilgilerimizi kayıt altında tutan yapılardır.Çerez denir.
console.log(navigator.cookieEnabled); //* Özelliği, tarayıcının çerezleri (cookies) etkinleştirip etkinleştirilmediği belirlemek için kullanılır.
//* Çerezler genellikler kullanıcı oturumları, tercihler ve analitik veriler gibi bilgileri depolamak için kullanılır.

let sayac = 0;

// let benimZaman = setInterval(sayaciArttir, 2000);
//* clearInterval: Sürekli olan ve çalışan zaman aralığını yok eder ve fonksiyon artık çağrılmaz durur(setInterval)
//* clearTimeOut: Belli bir süre sonra çağrılacak olan fonksiyonu yok eder.
// function sayaciArttir() {
//   sayac++;
//   console.log(sayac);

//   if (sayac === 5) {
//     clearInterval(benimZaman);
//   }
// }
//* Cookiler çeşitli bilgilerin kayıt edilebilmesini sağlar ve daha sonra ihtiyacımız olduğu anda erişip kullanabilmeye izin verir
document.cookie = "kullaniciAdi=ömer,sifre=123,tarih=6 Temmuz 2024";

setTimeout(() => {
  let bilgier = document.cookie;
  let ayristir = bilgier.split(",");
  console.log(ayristir);

  for (let index = 0; index < ayristir.length; index++) {
    console.log(ayristir[index]);
  }
}, 2000);

window.alert("selam");

console.log("çalıştı");

console.log(window.confirm("Kullanıcı onaylasın mı?"));
