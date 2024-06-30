// /*
//     ! DOM (Document Object Model)
// */
// //* id ile bir HTML tagını ulaşabilmek için getElementById özelliğini kullanırız
// let pElement = document.getElementById("eleman0");
// console.log(pElement);
// pElement.innerHTML =
//   "<b>Bu bir p etiketidir.Javascript içerisinden bu p etikitine b etiketi eklenildi.</b>";

// //* innerText sadece ulaştığımız elementin içindeki yazıyı değiştirmeyi sağlar.
// let element1 = document.getElementById("eleman1");
// element1.innerText = "Bu javascript tarafından değiştirildi.";
// //* getElementsByClassName içerisine girdiğimiz class ismine göre bir koleksiyon dönderir.
// const elemenet0Sinif = document.getElementsByClassName("eleman0");
// console.log(elemenet0Sinif);
// console.log(elemenet0Sinif.length);
// //* Döngüler ile dönerek her bir elemana ulaşabiliriz.
// for (let index = 0; index < elemenet0Sinif.length; index++) {
//   elemenet0Sinif[index].innerText = "Anlık değiştirdik:" + index;
// }

// /*
//     ! querySelector & querySelectorAll
//     * querySelectorAll ile name,tag,property vs. her şeyi seçeriz.Tüm elemanları NodeList olarak çevirir
//     * querySelector css de mantıkla çalışır.Etiketin class ismine göre çağırmak için (.) kullanılır.
//     * Etiketin idsine göre çağırmak için (#) işareti kullanılır.

// */

// const idSecici = document.querySelector("#eleman1");
// console.log(idSecici);

// const classSecici = document.querySelector(".elaman1");
// console.log(classSecici);

// const tagName = document.querySelector("p");
// console.log(tagName);

// const allTagName = document.querySelectorAll("p");
// console.log(allTagName);

// const image = document.getElementById("myImage");

// image.src = "https://udemig.com/assets/images/banner/hero-img.png";

// /* form validation */
// const formElement = document.getElementById("girisFormu");
// console.log(formElement);
// function formuDogrula(event) {
//   event.preventDefault(); // sayfanın yenilenmesini engeller
//   console.log(event);
// }

// formElement.addEventListener("submit", formuDogrula);

const h1Element = document.getElementById("heading1");

const changeColor = () => {
  console.log("tıklanıldı");
  h1Element.style.color = "red";
  h1Element.style.backgroundColor = "blue";
};

const btn = document.querySelector(".addClass");

const addClassFn = () => {
  //* Class ataması yapmak için kullanılır
  h1Element.className = "eklenilecekClass";
  //* Class eklemek için add kullanılır.İstediğimiz kadar class ekleyebiliriz
  //   h1Element.classList.add("eklenilecekClass", "size");

  h1Element.remove();
};

btn.addEventListener("click", addClassFn);

btn.onclick = function () {
  console.log("tıklanıldı");
};
/*
    * 1.yöntem: HTML'de etikete(tag) onclick="tiklamaFn" ekleyebiliriz.

    * 2.yöntem: Olay eklemek istediğimiz etiketi javascriptte çekip addEventListener ile olay ekleriz.
    * addEventListener iki parametre ister:
    * 1) Hangi olayı izleyeceğini ister
    * 2) Girdiğimiz olayda çalışacak fonksiyondur

    * 3.yöntem: Olay eklemek istediğimiz etiketi javascripte çekip değişken üzerinden olayı söyleyip karşısına bu olayda çalışacak fonksiyonu söyleriz.
    * btn.onclick = function () {console.log("tıklanıldı");
};
*/

let pEtiket = document.querySelector(".pClass");

let pBtn = document.querySelector("#pBtn");

const classRemove = () => {
  console.log("tıklanıldı");
  pEtiket.classList.remove("pClass");
};

pBtn.addEventListener("click", classRemove);

// pBtn.addEventListener("click", () => {
//   console.log("tıklanıldı");
//   pEtiket.classList.remove("pClass");
// });
// pBtn.addEventListener("click", function () {
//   console.log("tıklanıldı");
//   pEtiket.classList.remove("pClass");
// });
/*
    * onclick => Tıklama olayı
    * onload => Sayfa yüklenildiğinde
    * onmouseover => fare üzerine geldiğinde
    * onmouseout => fare üzerinden gittiğinde
    * onkeydown => klavye tuşuna basıldığında

*/
pBtn.addEventListener("mouseover", () => console.log("üzeirnde"));
pBtn.addEventListener("mouseout", (e) => console.log(e));

document.addEventListener("keydown", function (event) {
  console.log(event.key);
});
//* Bir üst kapsayıcısına erişmek için parentNode kullanırız
const child = document.querySelector(".text");
const parent = child.parentNode;
// console.log(parent);

const parent1 = document.getElementById("container");
const children = parent1.childNodes; // tüm çocuk düğümlerini getirir
const elementChildren = parent1.children; // Sadece elemen olan çocuk düğümleri getirir
console.log(elementChildren);

const firstChild = parent1.firstChild; // bir düğümün ilk çocuk düğümünü getirir
const lastChild = parent1.lastChild; // bir düğümün son çocuk düğümünü getirir
const firstElementChild = parent1.firstElementChild; // bir düğümün ilk çocuk element düğümünü getirir
const lastElementChild = parent1.lastElementChild; // bir düğümün son çocuk element düğümünü getirir
console.log(lastElementChild);

const nextSibling = child.nextSibling; // Bir düğümün hemen sonraki kardeş düğümüne erişir
const previousSibling = child.previousSibling; // Bir düğümün hemen önceki kardeş düğümüne erişir
const nextElementSibling = child.nextElementSibling; // Bir düğümün hemen sonraki element kardeş düğümüne erişri
const previousElementSibling = child.previousElementSibling; // Bir düğümün hemen öcenki element kardeş düğümüne erişri
console.log(previousElementSibling);
console.log(previousSibling);

//* Belirli bir etiket adına sahip tüm elementleri seçer
const div = document.getElementsByTagName("div");
console.log(div);

//* createElement:Javascript içerisinde html etiketi oluşturmaya yarar
const newElement = document.createElement("div");
const headingElement = document.createElement("h1");
headingElement.innerText = "Javascript tarafından oluşturuldu.";
//* appendChild: Parent elementin içerisine child elementler eklemeye yarar
newElement.appendChild(headingElement);
newElement.appendChild(pBtn);
//* insertBefore: Önce eklemek istedğimiz elementi ekleriz.
newElement.insertBefore(pBtn, headingElement);

//* removeChild: İçerisine gönderilen child etiketini siler
newElement.removeChild(pBtn);

console.log(newElement);
//* remove:DOM'dan bir ögğeyi kaldırmak için kullanırız
// parent1.remove();

const button = document.querySelector("#event");

// button.addEventListener("click", () => alert("butona tıklanıldı"));

const handleClick = () => {
  alert("butona tıklanıldı");
};

// button.addEventListener("click", handleClick);
// button.removeEventListener("click", handleClick);

// const button1 = document.getElementById("addItem");

// button1.addEventListener("click", function () {
//   const newItem = document.createElement("li");

//   newItem.textContent = "New Item";

//   const myList = document.getElementById("myList");

//   myList.appendChild(newItem);
// });

const myForm = document.getElementById("myForm");
// const input = document.getElementById("name");
// myForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const inputValue = input.value; // bir inputun içerisindeki değeri value ile alırız
//   alert("Form gönderildi!" + " " + inputValue);
// });
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = event.target[0].value;
  alert(inputValue);
});

const newElement1 = document.createElement("div");
newElement.textContent = "yeni etiket";

const myList = document.getElementById("myList");
const newItem = document.createElement("li");
newItem.textContent = "new item";
console.log(newItem);

const oldItem = document.getElementById("oldItem");
//* replaceChild:Mevcut bir elementin yerini yeni bir elementle değiştirmek için kullanırız
myList.replaceChild(newItem, oldItem);
