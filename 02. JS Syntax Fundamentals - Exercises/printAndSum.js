function printAndSum (m, n) {
    let string = "";
    let sum = 0;

    for (let i = m; i <= n; i++){
       
        string += i; 
        string += " ";
        sum += i;
    }

    console.log(string);
    console.log(`Sum: ${sum}`);
}

printAndSum (5, 10);