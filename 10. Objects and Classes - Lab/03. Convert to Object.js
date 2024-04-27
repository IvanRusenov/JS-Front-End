function solve (string) {
   let person = JSON.parse(string);
   Object.entries(person).forEach(e => console.log(`${e[0]}: ${e[1]}`));
}

solve ('{"name": "George", "age": 40, "town": "Sofia"}');