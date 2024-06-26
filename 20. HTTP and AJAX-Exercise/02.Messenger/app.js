function attachEvents() {
    document.querySelector("#refresh").addEventListener("click", getMessages);
    document.querySelector("#submit").addEventListener("click", postMessage);
    let url = "http://localhost:3030/jsonstore/messenger";
    let messages;

    async function getMessages() {
        messages = await(await fetch(url)).json();
        let textArea = document.querySelector("#messages");
        textArea.textContent = ""; 
        let output = []; 
        Object.values(messages).forEach(m => {
            output.push(`${m.author}: ${m.content}`);
        });
        textArea.textContent = output.join("\n");
        //first test fail if there is an \n at the end of the textarea textContent
    }

    async function postMessage() {
        let author = document.querySelector("input[name='author']").value;
        let content = document.querySelector("input[name='content']").value;

        await fetch(url, {
            method: "POST",
            body: JSON.stringify({ author, content })
        });
    }


}

attachEvents();