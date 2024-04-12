function simpleCalculator(n1, n2, operator) {

    let operations = {
        'multiply': n1 * n2,
        'divide': n1 / n2,
        'add': n1 + n2,
        'subtract': n1 - n2
    };

    console.log(operations[operator]);

}

simpleCalculator(50,
    13,
    'subtract'
);