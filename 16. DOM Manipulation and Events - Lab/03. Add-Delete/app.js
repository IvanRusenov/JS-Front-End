function addItem() {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = document.querySelector("#newItemText").value;
    let a = document.createElement("a");
    a.addEventListener("click", deleteLi);
    a.textContent = "[Delete]";
    a.href = "#";
    li.appendChild(span);
    li.appendChild(a);
    ul.appendChild(li);

    function deleteLi (e) {
        e.currentTarget.parentElement.remove();
    }
}
