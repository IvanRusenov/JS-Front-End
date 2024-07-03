window.addEventListener("load", solve);

function solve() {

  let form = document.querySelector("form");
  let studentName = document.querySelector("#student");
  let university = document.querySelector("#university");
  let score = document.querySelector("#score");
  let nextBtn = document.querySelector("#next-btn");
  nextBtn.addEventListener("click", addToPreview);

  
  
  function addToPreview() {
    
    if (studentName.value === "" || university.value === "" || score.value === "") {
      return;
    }

    
    let previewList = document.querySelector("#preview-list");
    let li = document.createElement("li");
    li.classList.add("application");
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    h4.textContent = studentName.value;
    let pUni = document.createElement("p");
    pUni.textContent = "University: " + university.value;
    let pScore = document.createElement("p");
    pScore.textContent = "Score: " + score.value;
    let editBtn = document.createElement("button");
    editBtn.classList.add("action-btn");
    editBtn.classList.add("edit");
    editBtn.textContent = "edit";
    editBtn.addEventListener("click", edit)
    let applyBtn = document.createElement("button");
    applyBtn.classList.add("action-btn");
    applyBtn.classList.add("apply");
    applyBtn.textContent = "apply";
    applyBtn.addEventListener("click", apply);
    article.appendChild(h4);
    article.appendChild(pUni);
    article.appendChild(pScore);
    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(applyBtn);
    previewList.appendChild(li);
    form.reset();
    nextBtn.disabled = true;

    function edit() {
      studentName.value = h4.textContent;
      university.value = pUni.textContent.substring(12);
      score.value = pScore.textContent.substring(7);
      previewList.removeChild(li);
      nextBtn.disabled = false;
    }

    function apply() {
      let candidatesList = document.querySelector("#candidates-list");
      li.removeChild(editBtn);
      li.removeChild(applyBtn);
      candidatesList.appendChild(li);
      nextBtn.disabled = false;
    }
    
  }



}




