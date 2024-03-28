function solve (string, startingIndex , count) {
    let result = string.substring(startingIndex, startingIndex + count);
    console.log(result);
}

solve('SkipWord', 4, 7);