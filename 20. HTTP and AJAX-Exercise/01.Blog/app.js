function attachEvents() {
    let btnLoadPosts = document.querySelector("#btnLoadPosts");
    btnLoadPosts.addEventListener("click", loadPosts);
    let postOption = document.querySelector("#posts");
    let allPosts;

    async function loadPosts() {
        let url = "http://localhost:3030/jsonstore/blog/posts";
        let result = await ((await fetch(url)).json());

        Object.values(result).forEach(p => {
            // console.log(p)
            let option = document.createElement("option");
            option.textContent = p.title;
            option.value = p.id;
            postOption.appendChild(option);
        })

        allPosts = result;
    }

    let btnViewPost = document.querySelector("#btnViewPost");

    btnViewPost.addEventListener("click", viewPost);

    async function viewPost() {

        let url = "http://localhost:3030/jsonstore/blog/comments";
        let result = await ((await fetch(url)).json());
        let selectedPostComments = Object.values(result).filter(c => c.postId === postOption.value);
        let h1 = document.querySelector("#post-title");

        let selectedPost = Object.values(allPosts).find(p => p.id === postOption.value);
        h1.textContent = selectedPost.title;
        let p = document.querySelector("#post-body");
        p.textContent = selectedPost.body;
        let ul = document.querySelector("#post-comments");
        ul.innerHTML = "";
        selectedPostComments.forEach(c => {
            let li = document.createElement("li");
            li.textContent = c.text;
            ul.appendChild(li);
        })
    }

}

attachEvents();