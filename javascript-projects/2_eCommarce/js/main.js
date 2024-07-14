import { addToCart, cart, displayCartTotal, renderCartItems } from "./cart.js";
import { fetchProducts, renderProducts } from "./products.js";
import { updateCartIcon } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.includes("cart.html")) {
    renderCartItems();
    displayCartTotal();
    updateCartIcon(cart);
  } else {
    const products = await fetchProducts();
    renderProducts(products, (event) => addToCart(event, products));
    updateCartIcon(cart);
  }
});

const menuBtn = document.getElementById("menu-icon");
//* menu butonuna tıkladığımızda fonksiyon çalıştır
menuBtn.addEventListener("click", () => {
  const navbar = document.querySelector(".navbar");
  //* navbar etiketine open-menu classı varsa çıkar yoksa ekle
  navbar.classList.toggle("open-menu");
});
