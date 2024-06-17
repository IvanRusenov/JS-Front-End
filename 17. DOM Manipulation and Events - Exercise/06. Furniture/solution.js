function solve() {
  const generate = document.querySelector("button");
  generate.addEventListener("click", onClick);

  const buy = document.querySelector("button:last-of-type");
  buy.addEventListener("click", buyFunc);

  function buyFunc(){
    let selectedFurniture = Array.from(document.querySelectorAll("input[type='checkbox']")).filter(c=> c.checked);
    let output = [];
    let price = 0;
    let decFactor = 0;
    selectedFurniture.forEach(f => {
     output.push(f.parentElement.parentElement.querySelector("td:nth-child(2)").textContent);
     price += Number(f.parentElement.parentElement.querySelector("td:nth-child(3)").textContent);
    decFactor += Number(f.parentElement.parentElement.querySelector("td:nth-child(4)").textContent);
    });
    let avgDecFactor = decFactor / selectedFurniture.length;
    let outputTextarea = document.querySelector("textarea:last-of-type");
    outputTextarea.textContent = `Bought furniture: ${output.join(", ")}\n`;
    outputTextarea.textContent += `Total price: ${price.toFixed(2)}\n`;
    outputTextarea.textContent += `Average decoration factor: ${avgDecFactor}`;
  }



  function onClick() {
    const items = JSON.parse(document.querySelector("textarea").value);

    items.forEach(item => {
      createRow(item);
    });

    function createRow(item) {
      let tbody = document.querySelector("tbody");
      let tr = document.createElement("tr");
      let tdImg = document.createElement("td");
      let img = document.createElement("img");
      img.src = item.img;
      tdImg.appendChild(img);
      tr.appendChild(tdImg);
      let tdName = document.createElement("td");
      tdName.textContent = item.name;
      tr.appendChild(tdName);
      tdPrice = document.createElement("td");
      tdPrice.textContent = item.price;
      tr.appendChild(tdPrice);
      let tdFactor = document.createElement("td");
      tdFactor.textContent = item.decFactor;
      tr.appendChild(tdFactor);
      let tdCheckbox = document.createElement("td");
      let input = document.createElement("input");
      input.type = "checkbox";
      // input.disabled = true;
      tdCheckbox.appendChild(input);
      tr.appendChild(tdCheckbox);
      tbody.appendChild(tr);
    }
  }


}