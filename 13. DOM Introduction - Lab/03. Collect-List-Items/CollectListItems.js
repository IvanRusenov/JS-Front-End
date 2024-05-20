function extractText() {
    let items = Array.from(document.getElementsByTagName("li"));
    let result = document.getElementById("result");
    let str = items.map(i => i.textContent).join("\n");
    result.value = str;
}


