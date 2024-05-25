function sumTable() {
    const elements = Array.from(document.querySelectorAll("td:nth-child(2)"));
    const sum = elements.reduce((acc, curr) => {
        return acc + Number(curr.textContent);
    }, 0) 

    // let sum = 0;
    // elements.forEach((e) => sum += Number(e.textContent));
    const result = document.getElementById("sum").textContent = sum;
}