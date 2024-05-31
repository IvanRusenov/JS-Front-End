function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let cells = Array.from(document.querySelectorAll("td"));
      let searchFor = document.getElementById("searchField").value;
      let rows  = Array.from(document.querySelectorAll("tbody tr"));
      rows.filter(r => r.classList.contains("select")).map(r => r.classList.remove("select"));
      cells.filter(c => c.textContent.includes(searchFor)).map(c => c.parentElement.className = "select");
   }
}