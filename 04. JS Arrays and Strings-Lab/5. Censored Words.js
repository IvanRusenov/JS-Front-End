function solve(text, word) {

    let newText = text;

    while (newText.includes(word)) {

        newText = newText.replace(word, "*".repeat(word.length));
        
    }

    console.log(newText);
  
}

solve('Find the hidden word hidden Find the hidden word hidden', 'hidden');