import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import {
  clearBtn,
  container,
  displayAlert,
  form,
  grocery,
  list,
  submitBtn,
} from "./js/helpers.js";

//* Düzenleme Seçenekleri
let editElement;
let editFlag = false; //* Düzenleme modunda olup olmadığı belirtir
let editID = ""; //* Düzenleme yapılan öğenin benzersiz kimliği

//! Fonksiyonlar
//* Silme butonuna tıkladığımız çalışır
const deleteItem = (e) => {
  //* Sil butonuna tıkladığımızda parentElement ile silmek istediğimiz article etiketine ulaştık
  //   const element = e.target.parentElement.parentElement.parentElement;
  //* belirli bir kimliğie göre arama yapmak için kullanırız
  const element = e.currentTarget.closest(".grocery-item");
  console.log("çalıştı");
  list.removeChild(element);

  displayAlert("Başarıyla Kaldırıldı", "danger");
};
//* Güncelleme butonuna tıkladığımız çalışır
const editItem = (e) => {
  const element = e.currentTarget.closest(".grocery-item");
  //* Kapsayıcı üzerinden kardeş etikete ulaştık
  editElement = e.target.parentElement.parentElement.previousElementSibling;
  //* Form içerisinde bulunan inputun değerini düzenlenen öğenin metniyle doldur
  grocery.value = editElement.innerHTML;

  editFlag = true;
  //* Düzenlenen öğenin kimliğini al
  editID = element.dataset.id;
  submitBtn.textContent = "Düzenle";
};

//* form gönderildiğinde çalışır
const addItem = (e) => {
  //* Sayfanın yenilenmesini engeller
  e.preventDefault();
  //* Inputun değerini alıp bir değişkene aktardık
  const value = grocery.value;
  //* uuid kütüphanesini kullanarak benzersiz bir id oluşturduk
  const id = uuidv4();

  //* Eğer inputun içerisi boş değilse ve düzenleme modunda değilsek
  if (value !== "" && !editFlag) {
    //* Yeni bir `article` etiketi oluşturmak için createElement metodunu kullandık
    const element = document.createElement("article");
    //* Yeni bir veri kimliği oluşturur
    let attr = document.createAttribute("data-id");
    attr.value = id;
    //* Oluşturduğumuz id'yi elemente ekledik
    element.setAttributeNode(attr);
    //* Oluşturduğumuz article etiketine grocery-item classını ekledik
    element.classList.add("grocery-item");
    //* Oluşturduğumuz article etiketinin içerisine html etiketlerimi aktardık ve dinamik yaptık
    element.innerHTML = `
         <p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;

    //* list kapsayıcısına oluşturduğumuz article etiketini ekledik
    list.appendChild(element);
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);

    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    //* containera show-container classı ekledik
    container.classList.add("show-container");
    displayAlert("Başarıyla Eklenildi", "success");
    grocery.value = "";
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value;
    submitBtn.textContent = "Ekle";
    displayAlert("Değer Değiştirildi", "success");
    grocery.value = "";
  }
};

const clearItems = () => {
  //   container.innerHTML = "";
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach((item) => list.removeChild(item));
  }
  container.classList.remove("show-container");
};

//! Olay İzleyicileri

//* forma gönderilme olayı ekle ve gönderilme olayında addItem fonksiyonunu çalıştır
form.addEventListener("submit", addItem);

clearBtn.addEventListener("click", clearItems);
