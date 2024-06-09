function focused() {
    let inputs = Array.from(document.querySelectorAll("h1 + input"));
    inputs.forEach(e => {
        e.addEventListener("focus", onClick);
        e.addEventListener("blur", onBlur);
    });
    
    function onClick(e) {
        e.target.parentElement.classList.add("focused");
    }

    function onBlur(e) {
        e.target.parentElement.classList.remove("focused");
    }
}