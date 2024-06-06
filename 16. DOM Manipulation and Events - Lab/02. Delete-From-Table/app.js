function deleteByEmail() {

   let email =  document.querySelector("label input").value;

   let emails = Array.from(document.querySelectorAll("td:nth-child(2)"));
   let result = document.querySelector("#result");
    emails.forEach(e => {
      if(e.textContent === email) {
        e.parentElement.remove();
        result.textContent = "Deleted";
      }else{
        result.textContent = "Not found.";
      }
    });
}