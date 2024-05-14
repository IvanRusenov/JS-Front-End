function oddOccurrences(input) {
    let words = input.toLowerCase().split(" ");
    let resultArr = [];

    while (words.length > 0) {

        let word = words.shift();
        let count = 1;

        while (words.includes(word)) {

            words.splice(words.indexOf(word), 1);
            count++;
        }


        if (count % 2 !== 0) {
            resultArr.push(word);
        }
    }

    console.log(resultArr.join(" "));

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');