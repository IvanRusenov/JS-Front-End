function attachEvents() {

    let ul = document.querySelector("#phonebook");
    document.querySelector("#btnLoad").addEventListener("click", getRecords);
    let url = "http://localhost:3030/jsonstore/phonebook";
    document.querySelector("#btnCreate").addEventListener("click", createRecord);

    async function getRecords() {
        records = await (await fetch(url)).json();

        ul.innerHTML = "";
        Object.values(records).forEach(r => {
            let li = document.createElement("li");
            let span = document.createElement("span");
            ul.appendChild(li);
            li.appendChild(span);
            span.textContent = `${r.person}: ${r.phone}`;
            span.value = r._id;
            let deleteButton = document.createElement("button");
            li.appendChild(deleteButton);
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", deleteEntrie);
        })

    }

    async function deleteEntrie(e) {
        let url = "http://localhost:3030/jsonstore/phonebook/";
        let id = e.target.parentElement.querySelector("span").value;
        await (await fetch(url + id, { method: "DELETE" }).json);
    }

    async function createRecord() {

        let person = document.querySelector("#person").value;
        let phone = document.querySelector("#phone").value;

        await fetch(url,
            {
                method: "POST",
                body: JSON.stringify({ person, phone })
            }

        );
        document.querySelector("#person").value = "";
        document.querySelector("#phone").value = "";
    }

}

attachEvents();