function solve(array) {

    array.sort((f, s) => f-s);
    let modifiedArray = [];

    while (array.length > 0) {

        modifiedArray.push(array.shift());

        if (array.length > 0) {
            modifiedArray.push(array.pop());
        }
    }

    return modifiedArray;

}



solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);