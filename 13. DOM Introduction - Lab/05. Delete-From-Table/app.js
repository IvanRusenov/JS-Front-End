function deleteByEmail() {
    const elements = Array.from(document.querySelectorAll("td:nth-Child(2)"));
    const email = document.querySelector('input[name="email"]').value;
    const element = elements.find(e => e.textContent === email);
    const result = document.getElementById("result");

    if (element) {
        element.parentElement.remove();
        result.textContent = "Deleted";
    } else {
        result.textContent = "Not found";
    }

}