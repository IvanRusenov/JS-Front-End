function search() {

   let itemsArr = Array.from(document.querySelectorAll("li"));
   let searchText = document.querySelector("#searchText").value;
   let result = document.getElementById("result");
   let counter;

   refresh();

   itemsArr
      .filter(i => i.textContent.includes(searchText))
      .forEach(el => {
         counter++;
         el.style.fontWeight = "bold";
         el.style.textDecoration = "underline";
      });

   result.textContent = `${counter} matches found`;

   function refresh() {
      itemsArr
         .filter(el => el.style.fontWeight === "bold")
         .map(el => {
            el.style.fontWeight = "normal";
            el.style.textDecoration = "none";
         });
      counter = 0;
   }

}
