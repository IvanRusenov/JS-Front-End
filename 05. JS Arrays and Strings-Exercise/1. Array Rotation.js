function solve (array, numberOfRotations) {
    while (numberOfRotations-- > 0){
        array.push(array.shift());
    }

    console.log(array.join(" "));
}

solve ([2, 4, 15, 31], 5);