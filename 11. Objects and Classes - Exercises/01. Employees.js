function employees (input) {
    class Emloyee {

        constructor(name){
            this.name = name;
            this.personalNum = name.length;
        }
    }

    let employeesArr = [];
    input.forEach(element => {
       employeesArr.push(new Emloyee(element));
    });

    employeesArr.forEach(e => console.log(`Name: ${e.name} -- Personal Number: ${e.personalNum}`));
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );