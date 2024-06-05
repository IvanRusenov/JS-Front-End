function addItem() {
    let input = document.querySelector("#newItemText").value;
    let li = document.createElement("li");
    li. textContent = input;
    let ul = document.querySelector("#items");
    ul.appendChild(li);
}