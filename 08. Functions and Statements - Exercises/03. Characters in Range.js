function printCharactersInRange (a, b) {

    let result = "";

    if (a.charCodeAt() < b.charCodeAt()) {
        for (let index = a.charCodeAt() + 1; index < b.charCodeAt(); index++) {
            result += String.fromCharCode(index) + " ";
        }
    }else {
        for (let index = b.charCodeAt() + 1; index < a.charCodeAt(); index++) {
            result += String.fromCharCode(index) + " ";
        }
    }
    
    console.log(result);
}



printCharactersInRange('a',
'd'
);