import { v4 as uuidv4 } from "https://jspm.dev/uuid";

var map;
let coords = [];
let notes = [];
//* Haritaya tıkladığımızda çalışır ve parametresine tıkladığımız yerle alakalı veriler gelir
const onMapClick = (e) => {
  //* haritaya tıkladığımızda form alanının style özelliğini flex yap
  form.style.display = "flex";
  //* coords dizisine tıkladığımız yerin koordinatlarını ekle
  coords = [e.latlng.lat, e.latlng.lng];
};
//* Kullanıcının konumuna göre ekrana haritayı göster
const loadMap = (e) => {
  //* Haritanın kurulumu
  map = L.map("map").setView([51.505, -0.09], 13);
  //* Haritanın nasıl gözükeceğini belirler
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  //* Haritada bir tıklanma olduğunda çalışacak fonksiyondur ve fonksiyon eventına tıkladığımı konumla alakalı veriler gidecektir
  map.on("click", onMapClick);
};

navigator.geolocation.getCurrentPosition(
  loadMap,
  console.log("Kullancı kabul etmedi")
);

const renderNoteList = (item) => {
  list.innerHTML = "";

  item.forEach((item) => {
    const listElement = document.createElement("li");
    // datasına sahip olduğu idyi ekleme
    listElement.dataset.id = item.id;

    listElement.innerHTML = `
         <div>
              <p>${item.desc}</p>
              <p><span>Tarih:</span>14.07.2024</p>
              <p><span>Durum:</span>status</p>
            </div>
            <i id="delete" class="bi bi-x"></i>
            <i id="fly" class="bi bi-airplane-fill"></i>
    
    `;
    // list etiketinin içerisine listElementi eklerken öncesine eklemek istediğimiz için insertAdjacentElement kullandık
    list.insertAdjacentElement("afterbegin", listElement);
  });
};

const handleSubmit = (e) => {
  // sayfanın yenilenmesini engelle
  e.preventDefault();
  // inputların ve selectin içerisindeki değerleri al
  const desc = e.target[0].value;
  const date = e.target[1].value;
  const status = e.target[2].value;
  // notes dizisine oluşturduğumuz yeni not objesini ekledik
  notes.push({ id: uuidv4(), desc, date, status, coords });
  //! localstorage ekleme yapılacak

  renderNoteList(notes);

  form.style.display = "none";
};

//! HTML'den gelenler
const form = document.querySelector("form");
const list = document.querySelector("ul");

//! Olay İzleyicileri
form.addEventListener("submit", handleSubmit);
