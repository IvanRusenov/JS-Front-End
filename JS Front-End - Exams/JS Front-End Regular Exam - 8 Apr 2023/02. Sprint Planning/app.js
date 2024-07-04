window.addEventListener('load', solve);

function solve() {
    
    let totalPoints = 0;

    let form = document.querySelector("form");

    let taskId = document.querySelector("#task-id");
    let title = document.querySelector("#title");
    let description = document.querySelector("#description");
    let label = document.querySelector("#label");
    let points = document.querySelector("#points");
    let assignee = document.querySelector("#assignee");
    let createTaskBtn = document.querySelector("#create-task-btn");

    let deleteTaskBtn = document.querySelector("#delete-task-btn");
    deleteTaskBtn.addEventListener("click", deleteItem);

    let tasksSection = document.querySelector("#tasks-section");
    createTaskBtn.addEventListener("click", createTask);


    let i = 0;


    function createTask() {

        if (title.value === "" || description.value === "" || label.value === "" || points.value === "" || assignee.value === "") { // Ivan Rusenov
            return;
        }

        let article = document.createElement("article");
        article.classList.add("task-card");
        i++;
        let id = `task-${i}`;
        taskId.value = id;
        article.setAttribute("id", id);
        let divLabel = document.createElement("div");
        divLabel.classList.add("task-card-label");
        let pointsValue = points.value;
        let labelValue = label.value;
        let assigneeValue = assignee.value;

        let className = ""
        if (label.value === "Feature") {

            divLabel.innerHTML = `${label.value} &#8865`;
            className = "feature";

        } else if (label.value === "Low Priority Bug") {

            divLabel.innerHTML = `${label.value} &#9737`;
            className = "low-priority";

        } else if (label.value === "High Priority Bug") {

            divLabel.innerHTML = `${label.value} &#9888`;
            className = "high-priority";

        }

        divLabel.classList.add(`${className}`);
        let h3 = document.createElement("h3");
        h3.classList.add("task-card-title");
        h3.textContent = title.value;
        let p = document.createElement("p");
        p.classList.add("task-card-description");
        p.textContent = description.value;
        let divPoints = document.createElement("div");
        divPoints.classList.add("task-card-points");
        divPoints.textContent = `Estimated at ${points.value} pts`;
        let divAssignee = document.createElement("div");
        divAssignee.classList.add("task-card-assignee");
        divAssignee.textContent = `Assigned to: ${assignee.value}`;
        let divAction = document.createElement("div");
        divAction.classList.add("task-card-actions");
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", loadToForm);

        divAction.appendChild(deleteBtn);
        article.appendChild(divLabel);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(divPoints);
        article.appendChild(divAssignee);
        article.appendChild(divAction);

        tasksSection.appendChild(article);

        totalPoints += Number(points.value);
        let totalPointsP = document.querySelector("#total-sprint-points");
        totalPointsP.textContent = `Total Points ${totalPoints}pts`;

        form.reset();

        function loadToForm() {
            createTaskBtn.disabled = true;
            deleteTaskBtn.disabled = false;

            title.value = h3.textContent;
            description.value = p.textContent;
            label.value = labelValue;
            points.value = pointsValue;
            assignee.value = assigneeValue;

            title.disabled = true;
            description.disabled = true;
            label.disabled = true;
            points.disabled = true;
            assignee.disabled = true;
            taskId.value = id;

        }
        
    }

    function deleteItem(e) {
        title.disabled = false;
        description.disabled = false;
        label.disabled = false;
        points.disabled = false;
        assignee.disabled = false;
        createTaskBtn.disabled = false;
        deleteTaskBtn.disabled = true;
        
        let currentPoints = Number(document.querySelector("#points").value);
        totalPoints -= currentPoints
        let totalPointsP = document.querySelector("#total-sprint-points");
        totalPointsP.textContent = `Total Points ${totalPoints}pts`;
        let idToRemove = e.target.parentElement.parentElement.querySelector("#task-id").value;
        let taskToRemove = document.getElementById(idToRemove);
        taskToRemove.remove();
        form.reset();

    }
}