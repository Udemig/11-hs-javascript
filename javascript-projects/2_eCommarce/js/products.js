export const fetchProducts = async () => {
  try {
    //* db.json dosyasına istek attık
    const response = await fetch("db.json");
    //* Hata olursa yeni bir hata oluştur
    if (!response.ok) {
      throw new Error("Üzgünüz bir hata oluştu");
    }
    //* Veriyi json a çevir ve dışarıya aktar
    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const renderProducts = (products, addToCartCallback) => {
  //* productList idli etiketi javascriptte çek
  const productList = document.getElementById("productList");
  //* parametre olarak gelen ürünleri dönüp herbir ürün için html oluştur
  productList.innerHTML = products
    .map(
      (product) => `
    <div class="product">
        <img
            src="${product.image}"
            class="product-img"
        />
        <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-price">${product.price}$</p>
            <a class="add-to-cart" data-id="${product.id}">Add to cart</a>
        </div>
    </div>`
    )
    .join("");

  //* Bütün ekleme butonlarını al
  const addToCartButtons = document.getElementsByClassName("add-to-cart");
  //* Bu butonları index numarasına göre bul ve olay izleyicisi ekle
  for (let i = 0; i < addToCartButtons.length; i++) {
    const addToCartButton = addToCartButtons[i];
    addToCartButton.addEventListener("click", addToCartCallback);
  }
};
