function loadRepos() {
   const url = "https://api.github.com/users/testnakov/repos";
   let result = document.querySelector("#res");

   fetch(url, { method: "GET" })
      .then((res) => res.text())
      .then((res) => {
         result.textContent = res;
      })
      .catch((err) => {
         console.error(err);
      })
}