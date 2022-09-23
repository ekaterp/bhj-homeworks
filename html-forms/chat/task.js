const widgetMessages = ["Кто тут?", "Где ваша совесть?", "Добрый день! До свидания!", "Мы ничего не будем вам продавать!", "Вы не купили ни одного товара, что бы с нами так разговаривать!", "К сожалению, все операторы сейчас заняты. Не пишите нам больше.", "Добрый день, мы ещё не проснулись. Позвоните через 10 лет"];
const chatWidget = document.querySelector(".chat-widget");
const messages = document.querySelector(".chat-widget__messages");
const clientMessage = document.getElementById("chat-widget__input");

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add("chat-widget_active");
})

function sendMessage(message, sender) {
    const date = new Date();
    messages.innerHTML += `
        <div class="message ${sender}">
            <div class="message__time"> ${date.getHours() + ":" + date.getMinutes()} </div>
            <div class="message__text"> ${message} </div>
        </div>
    `;
}

clientMessage.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && clientMessage.value.trim() != "") {
        sendMessage(clientMessage.value, "message_client");
        sendMessage(widgetMessages[Math.floor(Math.random() * widgetMessages.length)]);
        clientMessage.value = "";
    }
});
