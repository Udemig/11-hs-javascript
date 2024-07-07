// // const myFunction = () => {
// //   const inpObj = document.getElementById("id1");
// //   console.log(inpObj);
// //   if (!inpObj.checkValidity()) {
// //     document.getElementById("demo").innerHTML = inpObj.validationMessage;
// //   } else {
// //     document.getElementById("demo").innerHTML = "Input OK";
// //   }
// // };
// // /*
// //     ! Web Storage API

// //     * İki tür depolama mekanizması sunar.İkiside Javascript kullanılarak tarayıcıda veri depolamak için
// //     * kullanılır. Kullanım süreleri ve erişim kapsamları açısından farklılık gösterirler.

// //     * localStorage:
// //     1.Kullanım Süresi:
// //     * Veriler, tarayıcı kapatılsa bile kalıcı olarak depolanır.Yani tarayıcı kapatıldıktan sonra
// //     * bile veriler korunur ve bir sonraki oturumda erişilebilir.
// //     2.Erişim Kapsamı:
// //     * Farklı sekmeler arasında veya farklı pencereler arasında veri paylaşmak istiyorsak kullanabiliriz.

// //     * sessionStorage:
// //     1.Kullanım Süresi:
// //     * Veriler, tarayıcı pencersi veya sekmesi açık olduğu sürece depolanır.Pencereye veya sekme kapatıldığında
// //     * bu verilere erişim kaybolur.
// //     2.Erişim Kapsamı:
// //     * Sadece atbu pencere veya sekmede paylaşışılır.Diğer pencereler veya sekmelerde aynı veriye erişim yoktur.

// //     * Her iki depolama mekanizması da setItem ve getItem gibi temel metodları kullanır.
// //     * Anahtar-değer çiftlerini kullanarak verileri saklarız.
// // */
// // //* localStorage'a veri eklemek için setItem methodu kullandık.
// // //* setItem iki parametre ister:
// // //* 1.Ekleyeceğimiz verinin key(anahtar)
// // //* 2.Ekleyeceğimiz veri value(değer)
// // localStorage.setItem("kullaniciAdi", "test");
// // //* localStore'dan veri almak için getItem metodu kullanılır.
// // //* getItem metodu bizden almak istediğimiz verinin keyini ister.
// // console.log(localStorage.getItem("kullaniciAdi"));

// // const saveButton = document.querySelector(".saveButton");

// // const displaySavedUser = () => {
// //   const savedUser = localStorage.getItem("user");

// //   const user = JSON.parse(savedUser);
// //   console.log(user);
// //   document.getElementById("savedUser").innerText = JSON.stringify(user);
// // };

// // const saveUser = () => {
// //   //* name inputuna ulaş ve içerisindeki değeri al
// //   const nameValue = document.getElementById("name").value;
// //   //* email inputuna ulaş ve içerisindeki değeri al
// //   const emailValue = document.getElementById("email").value;
// //   //* Inputların içerisindeki verilere göre bir kullanıcı nesnesi oluştur
// //   const user = {
// //     name: nameValue,
// //     email: emailValue,
// //   };

// //   //* user objesini stringe çevirdik
// //   const strUser = JSON.stringify(user);
// //* stringe çevrilen user objesini localStorage'a ekledik
// //   localStorage.setItem("user", strUser);

// //   displaySavedUser();
// // };

// // saveButton.addEventListener("click", saveUser);
// // window.onload = displaySavedUser;

// // sessionStorage.setItem("favoriRenk", "siyah");

// // console.log(sessionStorage.getItem("favoriRenk"));
// /*
//     ! fetch API:
//     * Modern web tarayıcılarında sunucuya HTTP istekleri göndermek ve yanıtları işlemek için
//     * kullanılır.Fetch API asenkron veri alımı için geliştirilmiş olup, XMLHttpRequest yöntemine
//     * göre daha basit ve güçlü bir yapı sunar.Fetch API,promise tabanlıdır ve asenkron işlemler
//     * için daha kolay kullanım sağlar.
// */

// const istekAtma = async () => {
//   try {
//     const cevap = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const sonuc = await cevap.json();
//     console.log(sonuc);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("çalıştı");
//   }
// };
// // istekAtma();

// const istekAtma1 = () => {
//   //* istek at
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     //* gelen cevabı yakala jsona çevir
//     .then((res) => res.json())
//     //* çevrilmiş veriyi yakala
//     .then((sonuc) => console.log(sonuc))
//     //* hatayı yakalar
//     .catch((error) => console.log(error))
//     .finally(() => console.log("çalıştı"));
// };
// // istekAtma1();
// //* finally bloğu her durumda çalışır

// /*
//     ! Geolocation API
// */

// const getCurrentLocation = () => {
//   if (navigator.geolocation) {
//     //* Kullanıcının konumuna erişmek için getCurrentPostion metodu kullandık.Bu bizden iki parametre ister:
//     //* 1.Kullanıcı konumuna erişmesine izin verirse çalışacak fonksiyondur ve fonksiyon parametresine kullanıcının konumuyla alakalı verileri gönderir
//     //* 2.Kullanıcı konumuna erişmesine izin vermezse çalışacak fonksiyondur.
//     navigator.geolocation.getCurrentPosition(showPosition, showError);
//   }
// };

// // const showPosition = (position) => {
// //   console.log(position.coords.latitude);
// //   console.log(position.coords.longitude);
// // };

// // const showError = (error) => {
// //   console.log(error);
// // };

// // getCurrentLocation();

// let watchID;
// const startWatchingLocation = () => {
//   if (navigator.geolocation) {
//     //* watchPosition: Kullanıcının konumundaki değişiklikleri izler ve sürekli olarak
//     //* güncellenmiş konum bilgilerini sağlar.
//     watchID = navigator.geolocation.watchPosition(showPosition, showError);
//     console.log(watchID);
//   } else {
//     console.log("hata");
//   }
// };

// const stopWatchingLocation = () => {
//   if (navigator.geolocation && watchID !== undefined)
//     [navigator.geolocation.clearWatch(watchID)];
// };

// const showPosition = () => {};
// const showError = () => {};
// startWatchingLocation();
// // Konum değişikliklerini durdurmak için
// stopWatchingLocation();

const showBtn = document.getElementById("show-btn");
const hideBtn = document.getElementById("hide-btn");
const error = document.getElementById("error");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition, showError);
  }
};
showBtn.addEventListener("click", getLocation);
hideBtn.addEventListener("click", () => {
  latitude.innerText = "";
  longitude.innerText = "";
});
const getPosition = (position) => {
  console.log(position);
  latitude.innerText = position.coords.latitude;
  longitude.innerText = position.coords.longitude;
};
const showError = (err) => {
  console.log(err);
  error.innerText = err.message;
};
