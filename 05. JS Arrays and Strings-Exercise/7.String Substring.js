function solve(word, text) {

    let textArr = text.split(" ");
    let isMatch = false;

    for (const item of textArr) {
        if (item.toLowerCase() === word.toLowerCase()){
            isMatch = true;
            break;
        } 
    }

    if (isMatch) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

solve('python',
'JavaScript is the best programming language'
);