function signCheck(...nums) {
    return nums.filter(n => n < 0)
            .length % 2 === 0 ? "Positive" : "Negative";
}


console.log(signCheck(-1, 1, -3))
