function solve(params, text) {

    let paramsArr = params.split(", ");

    while (paramsArr.length > 0) {

        let replaceWith = paramsArr.shift();
        let toReplace = "*".repeat(replaceWith.length);

        if (text.includes(toReplace)) {
            text = text.replace(toReplace, replaceWith);
        }

    }
    
    console.log(text);
}

solve('great',
    'softuni is ***** place for learning new programming languages'
);