function attachEventsListeners() {

    let days = document.querySelector("#days");
    let hours = document.querySelector("#hours");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");
    let buttons = Array.from(document.querySelectorAll("div input:nth-child(3)"));
    
    buttons.forEach(b => b.addEventListener("click", onClick));

    function onClick(e) {
        let input = e.target.parentElement.querySelector("input:nth-child(2)").value;

        if (e.target.id === "secondsBtn") {
            minutes.value = input / 60;
            hours.value = minutes.value / 60;
            days.value = hours.value / 24;
        } else if (e.target.id === "minutesBtn") {
            seconds.value = input * 60;
            hours.value = input / 60;
            days.value = hours.value / 24;
        } else if (e.target.id === "hoursBtn") {
            minutes.value = input * 60;
            seconds.value = minutes.value * 60;
            days.value = hours.value / 24;
        } else if (e.target.id === "daysBtn") {
            hours.value = input * 24;
            minutes.value = hours.value * 60;
            seconds.value = minutes.value * 60;
        }

    }
}