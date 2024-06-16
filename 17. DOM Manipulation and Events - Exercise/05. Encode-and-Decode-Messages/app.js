function encodeAndDecodeMessages() {
    let sendArea = document.querySelector("textarea");
    let sendButton = document.querySelector("button:first-of-type");
    sendButton.addEventListener("click", sendMessage);
    let recievedArea = document.querySelector("textarea[placeholder='No messages...']");
    let decodeButton = document.querySelector("#main div:nth-child(2) button");
    decodeButton.addEventListener("click", decodeMessage);

    function sendMessage() {
        let message = sendArea.value;
        let encodedMessage = "";
        for (let i = 0; i < message.length; i++) {
            encodedMessage += String.fromCharCode(message.charCodeAt(i) + 1);
        }
        recievedArea.textContent = encodedMessage;
        sendArea.value = "";
    }

    function decodeMessage() {
        let decodedMessage = "";
        for (let i = 0; i < recievedArea.value.length; i++) {
            decodedMessage += String.fromCharCode(recievedArea.value.charCodeAt(i) - 1);
        }
        recievedArea.textContent = decodedMessage;
    }
}