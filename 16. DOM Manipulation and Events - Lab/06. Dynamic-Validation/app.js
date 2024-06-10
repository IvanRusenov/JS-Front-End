function validate() {

    let regex = /[a-z]+@[a-z]+\.[a-z]+/;
    let email = document.querySelector("#email");
    email.addEventListener("change", onChange);

    function onChange(e) {
        if (!regex.test(email.value)) {
            email.classList.add("error");
        } else {
            email.classList.remove("error");
        }
    }

}