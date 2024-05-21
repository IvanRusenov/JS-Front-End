function addItem() {
    let element = document.createElement("li");
    element.textContent = document.getElementById("newItemText").value;
    let ul = document.getElementById("items");
    ul.appendChild(element);
   
}