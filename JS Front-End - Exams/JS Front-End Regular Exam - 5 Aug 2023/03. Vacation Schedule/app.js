window.addEventListener("load", webApp);

function webApp() {

    const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
    let loadVacationsBtn = document.querySelector("#load-vacations");
    loadVacationsBtn.addEventListener("click", loadVacations);
    let list = document.querySelector("#list");
    let addVacationsBtn = document.querySelector("#add-vacation");
    addVacationsBtn.addEventListener("click", addVacation);
    let editBtn = document.querySelector("#edit-vacation");
    editBtn.addEventListener("click", editItem);

    loadVacations();

    function loadVacations() {

        list.innerHTML = "";

        function createDiv(values) {

            let content = `
            <h2>${values.name}</h2>
            <h3>${values.date}</h3>
            <h3>${values.days}</h3>
            <button class="change-btn">Change</button>
            <button class="done-btn">Done</button>`;

            let div = document.createElement("div");
            div.classList.add("container");
            div.setAttribute("id", values._id);
            div.innerHTML = content;
            let [changeBtn, doneBtn] = div.querySelectorAll("button");
            changeBtn.addEventListener("click", change);
            doneBtn.addEventListener("click", done);

            return div;

        }

        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {

                Object.values(data).forEach(v => {
                    list.appendChild(createDiv(v));
                })

            })
            .catch(err => {
                console.error(err);
            });

    }

    function addVacation() {

        let [name, days, date] = document.querySelectorAll("input");

        let customerData = {
            name: name.value,
            days: days.value,
            date: date.value
        }

        fetch(BASE_URL, {
            method: "POST",
            body: JSON.stringify(customerData)
        }).then(() => {
            loadVacations();
        })


    }


    function change(e) {
        let currentDiv = e.currentTarget.parentElement;
        // console.log(currentDiv);
        let currentId = currentDiv.id;
        let form = document.querySelector("#form form");
        form.setAttribute("id", currentId);////!!!!!
        currentDiv.style.display = "none";
        let editBtn = document.querySelector("#edit-vacation");
        editBtn.disabled = false;
        let addBtn = document.querySelector("#add-vacation");
        addBtn.disabled = true;

        let [name, days, date] = Array.from(form.querySelectorAll("input"));

        name.value = currentDiv.querySelector("h2").textContent;
        days.value = Array.from(currentDiv.querySelectorAll("h3"))[1].textContent;
        date.value = Array.from(currentDiv.querySelectorAll("h3"))[0].textContent;

    }

    function editItem() {
        let form = document.querySelector("form");
        let id = form.id;
        let divs = Array.from(document.querySelectorAll("div"));
        let currentDiv = divs.find(d => d.id === id);

        let [name, days, date] = form.querySelectorAll("input");

        let customerData = {
            name: name.value,
            days: days.value,
            date: date.value,
            _id: id
        }

        fetch(BASE_URL + id, {
            method: "PUT",
            body: JSON.stringify(customerData)
        }).then(() => {
            currentDiv.style.display = "";
            // currentDiv.id = id;
            editBtn.disabled = true;
            addBtn.disabled = false;
            form.reset();
        }).catch(err => {
            console.error(err);
        })
    }



    function done(e) {
       let id = e.currentTarget.parentElement.id;
       
       fetch(BASE_URL + id , {
        method: "DELETE"
       }).then(()=>{
        loadVacations();
       }).catch(err => {
        console.error(err);
       })
    }


}
