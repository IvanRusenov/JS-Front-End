function solve (persons) {

   phoneBook = persons.reduce((acc, curr) => {
    const [name, phoneNumber] = curr.split(" ");
    acc[name] = phoneNumber;

    return acc;

   },{});

   Object.entries(phoneBook).forEach(([key, value]) => {
    console.log(`${key} -> ${value}`);
   });  
    
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);