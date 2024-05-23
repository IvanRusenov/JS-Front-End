function addItem() {
    const ul = document.getElementById("items");
    const li = document.createElement("li");
    li.textContent = document.getElementById("newItemText").value;
    const a = document.createElement("a");
    a.textContent = "[Delete]";
    a.href = "#";
    a.addEventListener("click", (e) => {
       
        e.target.parentElement.remove();
        
    });
    li.appendChild(a);
    ul.appendChild(li);
}