function factorialDivision (n1, n2) {

    function factorial (num) {
       
        if (num === 1){
            return 1;
        }

        return num * factorial(num-1);

    }

    let factorialFirstNum = factorial(n1);
    let factorialSecondNum = factorial(n2);
    let result = factorialFirstNum / factorialSecondNum;
    console.log(result.toFixed(2));
}


factorialDivision(6,2);