export const saveToLocalStorage = (cart) => {
  //* Dışardan gönderilen ürünü stringe çevirip localStorage a ekledik
  localStorage.setItem("cart", JSON.stringify(cart));
};
//* localStorage da veri varsa getir yoksa boş dizi dönder
export const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};
