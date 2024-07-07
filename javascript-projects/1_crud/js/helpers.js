export const form = document.querySelector(".grocery-form");
export const grocery = document.getElementById("grocery");
export const list = document.querySelector(".grocery-list");
export const container = document.querySelector(".grocery-container");
export const submitBtn = document.querySelector(".submit-btn");
export const clearBtn = document.querySelector(".clear-btn");
const alert = document.querySelector(".alert");

export const displayAlert = (text, action) => {
  //* Dışardan parametre ile gelen texti alert classlı p etiketinin içerisine aktar
  alert.textContent = text;
  //* Dışardan parametre ile gelen class ismini ekledik
  alert.classList.add(`alert-${action}`);
  //* 3 saniye sonra içerisindeki fonkyionu çalıştırır
  setTimeout(() => {
    //* alertin içerisini boşalt
    alert.textContent = "";
    //* alertin classını sil
    alert.classList.remove(`alert-${action}`);
  }, 2000);
};
