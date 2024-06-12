function create(words) {
   let content = document.querySelector("#content");
   words.forEach(w => {
      let p = document.createElement("p");
      p.textContent = w;
      p.style.display = "none";
      let div = document.createElement("div");
      div.appendChild(p);
      content.appendChild(div);
      div.addEventListener("click", onClick);
   });


   function onClick(e) {
      e.currentTarget.querySelector("p").style.display = "block";
   }

}