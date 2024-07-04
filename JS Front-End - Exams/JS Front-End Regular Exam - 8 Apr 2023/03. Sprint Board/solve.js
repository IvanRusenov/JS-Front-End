window.addEventListener("load", attachEvents);

function attachEvents() {

    const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

    let loadBordButton = document.querySelector("#load-board-btn");
    loadBordButton.addEventListener("click", load);
    let addTaskBtn = document.querySelector("#create-task-btn");
    addTaskBtn.addEventListener("click", addTask);
    let form = document.querySelector("form");

    load();

    function createSprint(values) {

        let li = document.createElement("li");
        li.classList.add("task");

        let buttonText = "";

        if (values.status === "ToDo") {
            buttonText = "Move to In Progress";
        } else if (values.status === "In Progress") {
            buttonText = "Move to Code Review";
        } else if (values.status === "Code Review") {
            buttonText = "Move to Done";
        } else if (values.status === "Done") {
            buttonText = "Close";
        };

        let content = `<h3>${values.title}</h3><p>${values.description}</p><button>${buttonText}</button>`;
        li.innerHTML = content;

        return li;

    }

    function load() {

        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {

                let uls = Array.from(document.querySelectorAll("ul"));
                uls.forEach(ul => ul.innerHTML = "");

                Object.values(data).forEach(v => {
                    let articleID = "";
                    if (v.status === "ToDo") {
                        articleID = "todo-section";
                        buttonText = "Move to In Progress";
                    } else if (v.status === "In Progress") {
                        articleID = "in-progress-section";
                        buttonText = "Move to Code Review";
                    } else if (v.status === "Code Review") {
                        articleID = "code-review-section";
                        buttonText = "Move to Done";
                    } else if (v.status === "Done") {
                        articleID = "done-section";
                        buttonText = "Close";
                    }

                    let ul = document.querySelector(`#${articleID} ul`);
                    let li = createSprint(v);
                    let button = li.querySelector("button");
                    button.setAttribute("id", v._id);
                    button.addEventListener("click", moveSprint);
                    ul.appendChild(li);

                });
            })
            .catch(err => {
                console.error(err);
            });

    }

    function addTask() {

        let title = document.querySelector("#title").value;
        let description = document.querySelector("#description").value;

        if (title === "" || description === "") {
            return;
        };

        let status = "ToDo";

        let sprint = {
            title,
            description,
            status,
        };

        fetch(BASE_URL, {
            method: "POST",
            body: JSON.stringify(sprint)
        })
        .then(() => {
            form.reset();
        })
        .then(load)
        .catch(err => {
            console.error(err);
        });

    }

    function moveSprint(e) {

        let sectionID = e.currentTarget.parentElement.parentElement.parentElement.id;

        let newStatus = "";

        if (sectionID === "todo-section") {
            newStatus = "In Progress";
        } else if (sectionID === "in-progress-section") {
            newStatus = "Code Review";
        } else if (sectionID === "code-review-section") {
            newStatus = "Done";
        } else if (sectionID === "done-section") {
            deleteTask(this.id);
        };

        fetch(BASE_URL + this.id, {
            method: "PATCH",
            body: JSON.stringify({
                status: newStatus
            })
        })
        .then(load)
        .catch(err => {
            console.error(err);
        });

    }


    function deleteTask(id) {

        fetch(BASE_URL + id, {
            method: "DELETE"
        })
        .then(load)
        .catch(err => {
            console.error(err);
        });

    }

}

