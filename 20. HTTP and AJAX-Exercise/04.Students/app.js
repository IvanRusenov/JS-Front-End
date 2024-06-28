function attachEvents() {

  window.onload = showStudents;
  document.querySelector("#submit").addEventListener("click", addRecord);
  const url = "http://localhost:3030/jsonstore/collections/students";

  async function showStudents() {
    let students = await (await fetch(url)).json();

    const tbody = document.querySelector("tbody");

    Object.values(students).forEach(s => {

      const row = document.createElement("tr");
      const tdFirstName = document.createElement("td");
      const tdLastName = document.createElement("td");
      const tdFacultyNumber = document.createElement("td");
      const tdGrade = document.createElement("td");

      tdFirstName.textContent = s.firstName;
      tdLastName.textContent = s.lastName;
      tdFacultyNumber.textContent = s.facultyNumber;
      tdGrade.textContent = s.grade;
      row.appendChild(tdFirstName);
      row.appendChild(tdLastName);
      row.appendChild(tdFacultyNumber);
      row.appendChild(tdGrade);
      tbody.appendChild(row);

    });
  }

  async function addRecord() {

    const firstName = document.querySelector("input[name='firstName']").value;
    const lastName = document.querySelector("input[name='lastName']").value;
    const facultyNumber = document.querySelector("input[name='facultyNumber']").value;
    const grade = document.querySelector("input[name='grade']").value;

    await (fetch(url, {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        facultyNumber,
        grade
      })
    }));
    //TODO: accept only non-empty fields
  }

}

attachEvents();