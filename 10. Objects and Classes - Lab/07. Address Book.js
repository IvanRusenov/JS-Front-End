function addressBook (input) {
    inputAsObject = input.reduce((acc, curr) => {

        const[name, addressBook] = curr.split(":");
        acc[name] = addressBook;

        return acc;

    },{})

    Object.entries(inputAsObject).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    }).forEach(([name, addressBook]) => console.log(`${name} -> ${addressBook}`));

}

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']

);