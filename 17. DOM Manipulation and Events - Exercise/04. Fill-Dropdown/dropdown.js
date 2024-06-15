function addItem() {
    let newItemText = document.querySelector("#newItemText");
    let newItemValue = document.querySelector("#newItemValue");
    const menu = document.querySelector("#menu");
    const option = document.createElement("option");
    option.textContent = newItemText.value;
    option.value = newItemValue.value;
    menu.appendChild(option);
    newItemText.value = "";
    newItemValue.value = "";
}