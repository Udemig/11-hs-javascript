import { API } from "./js/api.js";
import { elements } from "./js/helpers.js";

const api = new API();

elements.form.addEventListener("submit", (e) => {
  //* Form gönderildiği anda sayfanın yenilenmesini engeller
  e.preventDefault();
  //* Inputun içerisinde ki değere event üzerinden erişip değişkene aktardık
  const query = e.target[0].value;

  //* Inputun içerisinde herhangi bir veri yoksa ekrana bir alert bas
  //* ve fonksiyonu burda durdur
  if (!query) {
    alert("Lütfen bir müzik ismi giriniz!");
    return;
  }
});
