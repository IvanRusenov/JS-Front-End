function solve (text, wordToSearch) {
    textArr = text.split(" ");
    let count = 0;
    for (const el of textArr) {
        if (el === wordToSearch){
            count++;
        }
    }

    console.log(count);
}

solve('softuni is great place for learning new programming languages softuni is great place for learning new programming languages softuni is great place for learning new programming languages softuni is great place for learning new programming languages softuni is great place for learning new programming languages',
'softuni');