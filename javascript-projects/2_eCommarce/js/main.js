import { addToCart } from "./cart.js";
import { fetchProducts, renderProducts } from "./products.js";

document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.includes("cart.html")) {
    console.log("sepet sayfasındayız");
  } else {
    const products = await fetchProducts();
    renderProducts(products, (event) => addToCart(event, products));
  }
});
