window.addEventListener("load", solve());

function solve() {
    let BASE_URL = "http://localhost:3030/jsonstore/tasks/";

    let loadHistoryBtn = document.querySelector("#load-history");
    loadHistoryBtn.addEventListener("click", loadHistory);
    let addWeatherBtn = document.querySelector("#add-weather");
    addWeatherBtn.addEventListener("click", addWeather)
    let editWeatherBtn = document.querySelector("#edit-weather");
    editWeatherBtn.addEventListener("click", editItem);
    let divList = document.querySelector("#list");
    let divTemplate = document.querySelector("#list div").cloneNode(true);
    let form = document.querySelector("form");

    function loadHistory() {

        divList.innerHTML = "";//clear current state

        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {

                Object.values(data).forEach(v => {
                    console.log(v)
                    let newDiv = divTemplate.cloneNode(true);
                    newDiv.setAttribute("id", v._id);
                    let buttons = Array.from(newDiv.querySelectorAll("button"));
                    buttons[0].addEventListener("click", chaneItem);
                    buttons[1].addEventListener("click", deleteItem);
                    newDiv.querySelector("h2").textContent = v.location;
                    newDiv.querySelector("h3").textContent = v.date;
                    newDiv.querySelector("#celsius").textContent = v.temperature;
                    divList.appendChild(newDiv);
                });


            }).catch(err => {
                console.error(err);
            });


    }


    function addWeather() {

        let location = document.querySelector("#location");
        let temperature = document.querySelector("#temperature");
        let date = document.querySelector("#date");

        fetch(BASE_URL, {
            method: "POST",
            body: JSON.stringify({
                location: location.value,
                temperature: temperature.value,
                date: date.value,
            })
        })

        form.reset()

        loadHistory();
    }

    function chaneItem(e) {

        let id = e.currentTarget.parentElement.parentElement.id;
        let parentDiv = document.getElementById(id);

        let h2 = parentDiv.querySelector("h2");//city
        let h3s = Array.from(parentDiv.querySelectorAll("h3"));//date, degrees

        let formInputs = Array.from(form.querySelectorAll("input"));
        formInputs[0].value = h2.textContent;
        formInputs[1].value = h3s[1].textContent;
        formInputs[2].value = h3s[0].textContent;

        form.setAttribute("id", id);
        parentDiv.style.display = "none";

        addWeatherBtn.disabled = true;
        editWeatherBtn.disabled = false;
       

    }


    function editItem() {
        let id = form.id;
        let location = document.querySelector("#location");
        let temperature = document.querySelector("#temperature");
        let date = document.querySelector("#date");

        fetch(BASE_URL + id, {
            method: "PUT",
            body: JSON.stringify({
                location: location.value,
                temperature: temperature.value,
                date: date.value,
            })
        }).then(() => {
            form.reset();
            form.removeAttribute("id");
            document.getElementById(id).style.display = "";
            // document.querySelector(`#${id}`).style.display = "";
            // loadHistory();
            // TODO MISSING ID 
            addWeatherBtn.disabled = false;
            editWeatherBtn.disabled = true;
        })

    }

    function deleteItem(e) {

        let id = e.currentTarget.parentElement.parentElement.id;

        fetch(BASE_URL + id, {
            method: "DELETE",
        }).then(() => {
            loadHistory();
        })
            .catch(err => {
                console.error(err);
            })

    }



}
