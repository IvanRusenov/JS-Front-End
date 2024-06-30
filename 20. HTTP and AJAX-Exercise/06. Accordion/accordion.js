window.addEventListener("load", solution);
function solution() {

    let url = "http://localhost:3030/jsonstore/advanced/articles/list";

    async function loadData() {
        let data = await ((await fetch(url)).json());

        Object.values(data).forEach(e => {
            createStructure(e);
        });

    }

    function createStructure(el) {

        let section = document.querySelector("#main");
        let divContaner = document.createElement("div");
        divContaner.classList.add("accordion");
        let divHead = document.createElement("div");
        divHead.classList.add("head");
        let span = document.createElement("span");
        span.textContent = el.title;
        let button = document.createElement("button");
        button.classList.add("button");
        button.textContent = "More";
        button.id = el._id;
        button.addEventListener("click", onClick);
        let divExtra = document.createElement("div");
        divExtra.classList.add("extra");
        let p = document.createElement("p");
        // p.textContent = el.title + " .....";

        divContaner.appendChild(divHead);
        divContaner.appendChild(divExtra);
        divHead.appendChild(span);
        divHead.appendChild(button);
        divExtra.appendChild(p);
        section.appendChild(divContaner);

    }

    async function onClick() {

        let p = this.parentElement.parentElement.querySelector(".extra p");
        let div = this.parentElement.parentElement.querySelector(".extra");
        
        if(this.textContent.toLowerCase() === "more"){
            div.style.display = "block"
            this.textContent = "Less";
            let id = this.id;
            let contentUrl = "http://localhost:3030/jsonstore/advanced/articles/details/" + id;
            let content = await (await fetch(contentUrl)).json();
            p.textContent = Object.values(content)[2];
        }else{
            this.textContent = "More";
            div.style.display = "none";
        }
        
    }



    loadData();

}

