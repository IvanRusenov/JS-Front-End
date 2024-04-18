function oddAndEvenSum(num) {

    let evenSum = 0;
    let oddSum = 0;

    for (let index = 0; index < String(num).length; index++) {

        let char = String(num).charAt(index);

        if (Number(char) % 2 === 0) {
            evenSum += Number(char);
        } else {
            oddSum += Number(char);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(1000435);