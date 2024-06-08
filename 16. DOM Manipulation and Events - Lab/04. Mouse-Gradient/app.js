function attachGradientEvents() {
    let field = document.querySelector("#gradient");
    let result = document.querySelector("#result");
    field.addEventListener("mousemove", displayPercent);

    function displayPercent(e) {
        let percent = Math.floor(e.offsetX / field.clientWidth * 100);
        result.textContent = `${percent}%`;
    }
}