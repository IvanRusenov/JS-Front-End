window.addEventListener("load", solve);

function solve() {
  let addBtn = document.querySelector("#add-btn");
  addBtn.addEventListener("click", addToSureList);
  let clearBtn = document.querySelector("#players-container button");
  clearBtn.addEventListener("click", () => {
    document.location.reload();
  });


  function addToSureList() {

    let inputFields = Array.from(document.querySelectorAll("input"));

    let playerName = inputFields[0];
    let score = inputFields[1];
    let round = inputFields[2];

    let sureList = document.querySelector("#sure-list");

    let li = document.createElement("li");
    li.classList.add("dart-item");
    let article = document.createElement("article");

    let pName = document.createElement("p");
    pName.textContent = playerName.value;
    article.appendChild(pName);

    let pScore = document.createElement("p");
    pScore.textContent = `Score: ${score.value}`;
    article.appendChild(pScore);


    let pRound = document.createElement("p");
    pRound.textContent = `Round: ${round.value}`;
    article.appendChild(pRound);

    li.appendChild(article);

    let editBtn = document.createElement("button");
    editBtn.addEventListener("click", editInfo);
    editBtn.classList.add("btn");
    editBtn.classList.add("edit");
    editBtn.textContent = "edit"
    li.appendChild(editBtn);

    let okBtn = document.createElement("button");
    okBtn.classList.add("btn");
    okBtn.classList.add("ok");
    okBtn.textContent = "ok";
    okBtn.addEventListener("click", addToScoreboard);
    li.appendChild(okBtn);

    sureList.appendChild(li);

    playerName.value = "";
    score.value = "";
    round.value = "";
    addBtn.disabled = true;
  }


  function editInfo() {
    let sureList = document.querySelector("#sure-list");
    let sureListInfo = Array.from(document.querySelectorAll("#sure-list article p"));
    let inputFields = Array.from(document.querySelectorAll("input"));
    for (let i = 0; i < sureListInfo.length; i++) {

      if (i > 0) {
        let num = Number(sureListInfo[i].textContent.substring(7));
        inputFields[i].value = num;
      } else {
        inputFields[i].value = sureListInfo[i].textContent;
      }

    }

    sureList.innerHTML = "";
    document.querySelector("#add-btn").disabled = false;
  }


  function addToScoreboard() {
    let board = document.querySelector("#scoreboard-list");
    let li = document.createElement("li");
    li.classList.add("dart-item");
    board.appendChild(li);
    let article = document.createElement("article");
    li.appendChild(article);

    let infoArr = Array.from(document.querySelectorAll("#sure-list p"));
    let sureList = document.querySelector("#sure-list");

    let pName = document.createElement("p");
    pName.textContent = infoArr[0].textContent;
    article.appendChild(pName);

    let pScore = document.createElement("p");
    pScore.textContent = infoArr[1].textContent;
    article.appendChild(pScore);


    let pRound = document.createElement("p");
    pRound.textContent = infoArr[2].textContent;
    article.appendChild(pRound);

    sureList.innerHTML = "";
    document.querySelector("#add-btn").disabled = false;

  }


}
