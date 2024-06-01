function solve() {

  let textArea = document.getElementById("input");
  let sentences = textArea.value.split(/(?<=\.)/).map((s) => s.trim()); // split by "after dot" - keeps the dots
 
  let output  = document.querySelector("#output");
  
  while(sentences.length > 0){
    let p = document.createElement("p");
    p.textContent = sentences.splice(0,3).join("");//better to join with a space
    output.appendChild(p);
  }
}

