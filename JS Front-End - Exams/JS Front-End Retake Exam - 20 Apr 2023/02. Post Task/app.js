window.addEventListener("load", solve);

function solve() {

    let taskTitle = document.querySelector("#task-title");
    let taskCategory = document.querySelector("#task-category");
    let taskContent = document.querySelector("#task-content");
    let publishBtn = document.querySelector("#publish-btn");
    publishBtn.addEventListener("click", addInfoToUl);
    let form = document.querySelector("form");

    function addInfoToUl() {
        let reviewList = document.querySelector("#review-list");

        if (taskTitle.value === "" || taskCategory.value === "" || taskContent.value === "") {
            return;
        }

        let li = document.createElement("li");
        li.classList.add("rpost");
        let article = document.createElement("article");
        let h4 = document.createElement("h4");
        let pCategory = document.createElement("p");
        let pContent = document.createElement("p");
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("action-btn");
        editBtn.classList.add("edit");
        editBtn.addEventListener("click", edit);
        let postBtn = document.createElement("button");
        postBtn.textContent = "Post";
        postBtn.classList.add("action-btn");
        postBtn.classList.add("post");
        postBtn.addEventListener("click", post);

        article.appendChild(h4);
        article.appendChild(pCategory);
        article.appendChild(pContent);
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(postBtn);
        reviewList.appendChild(li);


        h4.textContent = taskTitle.value;
        pCategory.textContent = `Category: ${taskCategory.value}`;
        pContent.textContent = `Content: ${taskContent.value}`;
        form.reset();


        function edit() {
            taskTitle.value = h4.textContent;
            taskCategory.value = pCategory.textContent.substring(10);
            taskContent.value = pContent.textContent.substring(9);

            reviewList.removeChild(li);
        }


        function post() {
            let publishedList = document.querySelector("#published-list");

            li.removeChild(editBtn);
            li.removeChild(postBtn);
            publishedList.appendChild(li);
            reviewList.removeChild(li);

        }
    }
}