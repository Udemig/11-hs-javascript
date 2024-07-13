import { getCartFromLocalStorage, saveToLocalStorage } from "./utils.js";

let cart = getCartFromLocalStorage();

export const addToCart = (event, products) => {
  //* Tıkladığımız ürünün idsine dataset ile eriştik
  const productID = parseInt(event.target.dataset.id);
  const product = products.find((product) => productID === product.id);
  //* Eğer tıkladığımız ürün bulunursa if bloğu içerisine gir
  if (product) {
    //* Tıkladığımız ürün önceden sepette varsa find metodu kullanarak buluruz
    const existingItem = cart.find((item) => item.id === productID);
    console.log(existingItem);

    //* Sepette bu üründen önceden varsa miktarını bir arttır
    if (existingItem) {
      existingItem.quantity++;
    } else {
      console.log("ürün sepete ilk defa ekleniyor");
      //* Sepete ilk defa ürün eklediğimiz için yeni eklenen ürünün miktarını obje içerisinde tanımladık
      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      };
      cart.push(cartItem);
    }
    //* localStorage a veri ekle
    saveToLocalStorage(cart);
    //* Sepete eklenen ürünün a etiketinin içeriğini değiştir
    event.target.textContent = "Added";
  }
};
