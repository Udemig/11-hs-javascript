//! HTML'den gelenler
const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");
const themeButton = document.querySelector("#theme-btn");
const defaultText = document.querySelector(".default-text");
const deleteButton = document.querySelector("#delete-btn");
const container = document.querySelector(".container");
let userText = null;

//! Fonkiyonlar

//* Gönderdiğimiz html ve class ismine göre bize bir html oluşturur
const createElement = (html, className) => {
  //* Yeni div oluştur
  const chatDiv = document.createElement("div");
  //* Bu oluşturduğumuz dive chat ve dışardan parametre olaran gelen classı ekle
  chatDiv.classList.add("chat", className);
  //* Oluşturduğumuz divin içerisine dışardan parametre olarak gelen html parametresini ekle
  chatDiv.innerHTML = html;

  return chatDiv;
};

const getChatResponse = async (incomingChatDiv) => {
  const pElement = document.createElement("p");
  //* 1.adım:URL'i tanımla
  const url = "https://chatgpt-42.p.rapidapi.com/geminipro";
  //* 2.adım:optionsı tanımla
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "17bfa31bbbmsh1355592a7405f9bp1dd229jsnd7e87c1e1260",
      "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [
        {
          role: "user",
          content: `${userText}`,
        },
      ],
      temperature: 0.9,
      top_k: 5,
      top_p: 0.9,
      max_tokens: 256,
      web_access: false,
    }),
  };
  //* 3.adım:API'ye istek at
  try {
    //* API'ye urli ve optionsu kullanarak istek at ve bekle
    const response = await fetch(url, options);
    //* Gelen cevabı jsona çevir ve bekle
    const data = await response.json();
    //* API'den gelen cevabı oluşturduğumuz p etiketinin içerisine aktar
    pElement.innerText = data.result;
  } catch (error) {
    //* hata varsa yakalar
    console.log(error);
  }
  //* Animasyonu kaldırabilmek için querySelector ile seçtik ve ekrandan remove ile kaldırdık
  incomingChatDiv.querySelector(".typing-animation").remove();
  //* Bu detail içerisine oluşturduğumuz pElement etiketini aktardık
  incomingChatDiv.querySelector(".chat-details").appendChild(pElement);
  //* Inputun içerisini boş bırak
  chatInput.value = null;
  saveChatHistory();
};

const showTypingAnimation = () => {
  const html = `
         <div class="chat-content">
          <div class="chat-details">
            <img src="./images/chatbot.jpg" alt="" />
            <div class="typing-animation">
              <div class="typing-dot" style="--delay: 0.2s"></div>
              <div class="typing-dot" style="--delay: 0.3s"></div>
              <div class="typing-dot" style="--delay: 0.4s"></div>
            </div>
          </div>
        </div>
    
    `;
  const incomingChatDiv = createElement(html, "incoming");
  chatContainer.appendChild(incomingChatDiv);
  getChatResponse(incomingChatDiv);
};

const handleOutGoingChat = () => {
  //* Inputun içerisindeki değeri al ve fazladan bulunan boşlukları sil
  userText = chatInput.value.trim();
  //* Inputun içerisindeki veri yoksa fonknsiyonu burda durdur ve ekrana alert bas
  if (!userText) {
    alert("Bir veri giriniz!");
    return;
  }
  const html = `
     <div class="chat-content">
        <div class="chat-details">
            <img src="./images/user.jpg" alt="" />
            <p>react nedir</p>
        </div>
    </div>
  `;
  const outgoingChatDiv = createElement(html, "outgoing");
  defaultText.remove();
  outgoingChatDiv.querySelector("p").textContent = userText;
  chatContainer.appendChild(outgoingChatDiv);
  setTimeout(showTypingAnimation, 500);
};

//! Olay İzleyicileri
sendButton.addEventListener("click", handleOutGoingChat);
//* Textarea içerisinde klavyeden herhangi bir tuşa bastığımız anda bu olay izleyicisi çalışır
chatInput.addEventListener("keydown", (e) => {
  //* Klavyeden enter tuşuna basıldığı anda handleOutGoingChat fonksiyonunu çalıştırır
  if (e.key === "Enter") {
    handleOutGoingChat();
  }
});
//* ThemeButtona her tıkladığımızda lightmode classını ekle ve çıkar
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  //* body light-mode classını içeriyorsa themeButton içeriisndeki yazıyı dark_mode yap.İçermiyorsa light_mode yap
  themeButton.innerText = document.body.classList.contains("light-mode")
    ? "dark_mode"
    : "light_mode";
});

deleteButton.addEventListener("click", () => {
  /*
   * Confirm ile ekrna bir mesaj bastırdık.Confirm bize true ve false değerleri dönderir.
   * Tamam tuşuna basıldığında true dönderiririz
   * İptal tuşuna basıldığındad false dönderir
   */
  if (confirm("Tüm sohbetleri silmek istediğinizden emin misiniz?")) {
    chatContainer.remove();
    localStorage.removeItem("chatHistory");
  }

  const defaultText = `
     <div class="default-text">
      <h1>ChatGPT Clone</h1>
    </div>
    <div class="chat-container"></div>
      <div class="typing-container">
      <div class="typing-content">
        <div class="typing-textarea">
          <textarea
            id="chat-input"
            placeholder="Aratmak istediğiniz veriyi giriniz..."
          ></textarea>
          <span class="material-symbols-outlined" id="send-btn"> send </span>
        </div>
        <div class="typing-controls">
          <span class="material-symbols-outlined" id="theme-btn">
            light_mode
          </span>
          <span class="material-symbols-outlined" id="delete-btn">
            delete
          </span>
        </div>
      </div>
    </div>

  `;
  document.body.innerHTML = defaultText;
});
//* localStorage veriyi ekleme
const saveChatHistory = () => {
  localStorage.setItem("chatHistory", chatContainer.innerHTML);
};

const loadChatContainer = () => {
  const chatHistory = localStorage.getItem("chatHistory");
  if (chatHistory) {
    chatContainer.innerHTML = chatHistory;
    defaultText.remove();
  }
};

document.addEventListener("DOMContentLoaded", loadChatContainer);
