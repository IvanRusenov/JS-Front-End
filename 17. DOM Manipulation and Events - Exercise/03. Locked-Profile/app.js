function lockedProfile() {
   let buttons = Array.from(document.querySelectorAll("button"));
    buttons.forEach(b=> {
        b.addEventListener("click", onClick);
    })

    function onClick(e) {
        const inputRadioLocked = e.target.parentElement.querySelector("input:first-of-type");
        if(!inputRadioLocked.checked){
            const button = e.target;
            if(button.textContent === "Hide it"){
                button.parentElement.querySelector("div").style.display = "none";
                e.target.textContent = "Show more";
            }else{
               button.parentElement.querySelector("div").style.display = "block";
                button.textContent = "Hide it";
            }
        }
    }
}