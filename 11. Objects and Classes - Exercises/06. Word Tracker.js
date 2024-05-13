function wordTracker (input) {
    let [words, ...text] = input;
    let occurrenses = {};

    words.split(" ").forEach(w => {
        occurrenses[w] = 0;
        
        text.forEach(el => {
            if(el.trim() === w) {
                occurrenses[w] +=1;
            }
        });
    })


    let occurrencesArr = [];

    Object
    .entries(occurrenses)
    .forEach(([k, v]) => {
        occurrencesArr.push([k, v]);
    } );

    occurrencesArr
    .sort((f,s) => s[1] - f[1])
    .forEach(el => console.log(`${el[0]} - ${el[1]}`));

}


wordTracker (['this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

wordTracker (['is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);