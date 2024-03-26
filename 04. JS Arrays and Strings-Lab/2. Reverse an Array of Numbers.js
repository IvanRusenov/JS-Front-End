function solve(n, array) {

    let newArray = array.slice(0, n);

    let reversedArray = newArray.reverse();
    console.log(reversedArray.join(" "));

}

solve(2, [66, 43, 75, 89, 47]);