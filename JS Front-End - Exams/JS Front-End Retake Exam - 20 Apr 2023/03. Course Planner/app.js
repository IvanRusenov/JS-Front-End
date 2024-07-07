window.addEventListener("load", coursePlanner);

function coursePlanner() {

    const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
    let loadCoursesBtn = document.querySelector("#load-course");
    loadCoursesBtn.addEventListener("click", load);
    let addCourseBtn = document.querySelector("#add-course");
    addCourseBtn.addEventListener("click", addCourse);
    let form = document.querySelector("form");
    let editCurseBtn = document.querySelector("#edit-course");

    load();
    function createDiv(values) {

        let div = document.createElement("div");
        div.classList.add("container");

        let content =
            `<input type="hidden" id="hiddenID" value=${values._id}>
         <h2>${values.title}</h2>
         <h3>${values.type}</h3>
         <h3>${values.teacher}</h3>
         <h4>${values.description}</h4>
         <button class="edit-btn">Edit Course</button>
         <button class="finish-btn">Finish Course</button>`;

        div.innerHTML = content;
        let [editBtn, finishBtn] = Array.from(div.querySelectorAll("button"));
        editBtn.addEventListener("click", edit);
        finishBtn.addEventListener("click", finish);

        return div;

    }

    function load() {

        let list = document.querySelector("#list");
        list.innerHTML = "";

        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                Object.values(data).forEach(v => {
                    list.appendChild(createDiv(v));
                });

            }).catch(err => {
                console.error(err);
            });

    }

    function addCourse(e) {

        let inputs = Array.from(form.querySelectorAll("input"));
        let textArea = form.querySelector("textArea");
        let [title, type, teacher] = inputs;

        let course = {
            title: title.value,
            teacher: teacher.value,
            type: type.value,
            description: textArea.value,
        }


        fetch(BASE_URL, {
            method: "POST",
            body: JSON.stringify(course)
        }).then(load());

    }


    function edit(e) {

        let currentDiv = e.currentTarget.parentElement;
        let [divId, divTytle, divType, divLector, divDescription] = currentDiv.children;

        currentDiv.style.display = "none";

        let inputs = Array.from(form.querySelectorAll("input"));
        let formDescription = form.querySelector("textArea");
        let [formTytle, formType, formLector] = inputs;

        formTytle.value = divTytle.textContent;
        formType.value = divType.textContent;
        formLector.value = divLector.textContent;
        formDescription.value = divDescription.textContent;

        addCourseBtn.disabled = true;
        editCurseBtn.disabled = false;
        editCurseBtn.addEventListener("click", editCourse);

        function editCourse(e) {

            let course = {
                title: formTytle.value,
                type: formType.value,
                description: formDescription.value,
                teacher: formLector.value,
                _id: divId.value//!!!
            }

            fetch(BASE_URL + divId.value, {
                method: "PUT",
                body: JSON.stringify(course)
            })
                .then(() => {
                    currentDiv.style.display = "";
                    form.reset();
                    addCourseBtn.disabled = false;
                    editCurseBtn.disabled = true;
                    load()
                })
                .catch(err => {
                    console.error(err);
                })

        };



    }

    function finish(e) {

        let id = e.currentTarget.parentElement.querySelector("#hiddenID").value;

        fetch(BASE_URL + id, {
            method: "DELETE"
        })
            .then(load)
            .catch(err => {
                console.error(err);
            })

    }



}

