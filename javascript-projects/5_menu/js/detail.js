import { menu } from "./db.js";
import { calculatePrice, elements } from "./helpers.js";

/*
* URL'de ki parametreleri yönetebilmek için URLSearchParams classından örnek oluşturduk
* Örneği oluştururken kendi URL'imizde ki parametreleri gönderdik

*/

const search = window.location.search;
const searchParams = new URLSearchParams(search);
//* Get metoduna gönderdiğimiz değişkene göre değere ulaştık
const paramid = searchParams.get("id");
//* URL'den aldığımız paramid değişkenini numbera çevirdik ve sonrasında
//* bu idli elemanı dizi içerisinde bulup değişkene aktardık
const product = menu.find((item) => item.id === Number(paramid));

elements.outlet.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
        <a href="./index.html">
          <i class="bi bi-house fs-2"></i>
        </a>
    <div>anasayfa / ${product.category} / ${product.title.toLowerCase()}</div>
    </div>
    <h1 class="text-center shadow p-2 rounded">${product.title}</h1>
    <div class="d-flex justify-content-center align-items-center">
        <img src="${product.img}" alt="" style="max-width: 480px" />
    </div>
    <div>
        <h3 class="my-5">
          Ürünün Kategorisi: <span class="text-success">${
            product.category
          }</span>
        </h3>
        <h3>Ürünün Fiyatı: <span class="text-success">${calculatePrice(
          product.price
        )} ₺</span> </h3> 
    </div>
    <p class="lead fs-3">
        ${product.desc}
    </p>


`;
