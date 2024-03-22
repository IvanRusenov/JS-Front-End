function sumDigits(n) {
    let sum = 0;
    let isNegative = false;
    if (n < 0 ){
        isNegative = true;
        n *= -1;
    }

    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    if (isNegative){
        sum *=- 1;
    }
    console.log(sum);
}

sumDigits(-543); //negative numbers