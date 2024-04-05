function solve (string) {
    stringArr = string.split(" ");

    for (const word of stringArr) {
        
        if (/[#][a-zA-Z]+/.test(word)){
            console.log(word.substring(1))
        }
    }

}


solve ('Nowadays everyone uses # to tag a #special word in #socialMedia');