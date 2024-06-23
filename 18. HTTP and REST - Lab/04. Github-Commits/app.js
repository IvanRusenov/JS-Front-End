function loadCommits() {
   let username = document.querySelector("#username").value;
   let repo = document.querySelector("#repo").value;
   const url = `https://api.github.com/repos/${username}/${repo}/commits`;
   let ul = document.querySelector("#commits");
   
   return fetch(url).then((res) => res.json()).then((data) => {
         data.forEach(el => {
            let li = document.createElement("li");
            li.textContent = `${el.commit.author.name}: ${el.commit.message}`;
            ul.appendChild(li)
         });
      }).catch((err) => {
         let li = document.createElement("li");
         // let msg = res.status;
         console.log(err);
         li.textContent = `Error: ${err.message} (Not Found)`;
         ul.appendChild(li);
      })
}