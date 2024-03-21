function sameNumbers(n) {

    let sum = 0;
    let isNegative = false;
    let m = n % 10;
    let isAlldigitsEqual = true;

    if (n < 0) {
        isNegative = true;
        n *= -1;
    }

    while (n > 0) {

        let lastDigit = n % 10;

        if (lastDigit != m) {
            isAlldigitsEqual = false;
        }

        sum += lastDigit;
        n = Math.floor(n / 10);
    }

    if (isNegative) {
        sum *= - 1;
    }

    console.log(isAlldigitsEqual);
    console.log(sum);
}

sameNumbers(1234);