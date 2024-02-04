const wsUri = "wss://echo-ws-service.herokuapp.com";

const externalWindowChat = document.querySelector(".externalWindowChat");
const btnSend = document.querySelector(".btn_send");
const btnGeo = document.querySelector(".btn_geo");

let websocket;

// отображение пользовательского сообщения
const writeToScreenUser = (message) => {
  let messageDiv = document.createElement("div");
  messageDiv.classList.add("message_div", "user");
  messageDiv.innerHTML = message;
  externalWindowChat.append(messageDiv);
};

// отображение сообщения сервера
const writeToScreenServer = (message) => {
  let messageDiv = document.createElement("div");
  messageDiv.classList.add("message_div", "server");
  messageDiv.innerHTML = message;
  messageDiv.style.color = "blue";
  externalWindowChat.append(messageDiv);
};

// отображение геолокации
const writeToScreenGeo = (url) => {
  let messageDiv = document.createElement("div");
  messageDiv.classList.add("message_div", "user");
  if (url) {
    let linkGeo = document.createElement("a");
    linkGeo.classList.add("link_geo");
    linkGeo.innerHTML = "Гео-локация";
    linkGeo.href = url;
    linkGeo.target = "_blank";
    messageDiv.append(linkGeo);
    externalWindowChat.append(messageDiv);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  websocket = new WebSocket(wsUri);
  // отправка и получение сообщений
  btnSend.addEventListener("click", () => {
    const inputField = document.querySelector(".input");
    const userMessage = document.querySelector(".input").value.trim(" ");
    if (userMessage) {
      writeToScreenUser(userMessage);
      const serverResponce = writeToScreenServer(userMessage);
      websocket.send(serverResponce);
      inputField.value = "";
    }
  });
});

// вывод на дисплей местоположения
btnGeo.addEventListener("click", () => {
  if ("geolocation" in navigator) {
    writeToScreenServer("Определение местоположения…");
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      const latitude = coords.latitude;
      const longitude = coords.longitude;
      const mapUrl = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      writeToScreenGeo(mapUrl);
      websocket.send(coords);
    });
  }
});
