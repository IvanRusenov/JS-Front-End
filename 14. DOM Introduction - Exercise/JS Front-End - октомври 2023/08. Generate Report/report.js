function generateReport() {

    let columns = Array.from(document.querySelectorAll("tr th"));
    let indexOfCheckedColumns = [];
    let count = 0;

    columns.forEach(c => {
        count++;
        if (c.querySelector("input:checked")) {
            indexOfCheckedColumns.push(Number(count));
        }
    });

    let rows = Array.from(document.querySelectorAll("tbody tr"));
    let employees = [];

    rows.forEach(r => {

        let employee = {};

        indexOfCheckedColumns.forEach(i => {
           
            let key = columns[Number(i - 1)].textContent.trim().toLowerCase();
            let value = r.querySelector(`td:nth-child(${i})`).textContent.trim();
           //check is some values empty
            if (value !== "" && key !== "") {
                employee[key] = value;
            }

        });

        employees.push(employee);
        
    });

    let output = document.querySelector("#output");
    output.textContent = JSON.stringify(employees);

}