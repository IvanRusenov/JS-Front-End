function solve (strArr, step) {
    let newArr = [];
    for (let i = 0; i < strArr.length; i+=step) {
        newArr.push(strArr[i]);
    }

    return(newArr);
}

solve(['dsa',
'asd', 
'test', 
'tset'], 
2
);