export const saveToLocalStorage = (cart) => {
  //* Dışardan gönderilen ürünü stringe çevirip localStorage a ekledik
  localStorage.setItem("cart", JSON.stringify(cart));
};
//* localStorage da veri varsa getir yoksa boş dizi dönder
export const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const calculateCartTotal = (cart) => {
  /*
    * reducer:Diziyi tek bir değere indirgemek için kullanılır
    * Birinci parametre olarak callback fonksiyon çağrılır.Bu fonksiyonun
    * parametresine her bir öğenin toplam maliyete eklenmesi için kullanılan matematiksel işlemdir
    * ikinci parametre reduce fonksiyonunun başlangıç değeridir
  
  */
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

export const updateCartIcon = (cart) => {
  const cartIcon = document.getElementById("cart-icon");
  const i = document.querySelector(".bx-shopping-bag");
  let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  i.setAttribute("data-quantity", totalQuantity);
};
