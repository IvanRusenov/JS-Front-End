function palindromeIntegers(intArr) {

    for (const el of intArr) {

        let isPalindrome = true;
        let elAsArray = String(el).split("").map(n => Number(n));

        while (elAsArray.length > 1) {

            let firstElement = elAsArray.shift();
            let lastElement = elAsArray.pop();

            if (firstElement !== lastElement) {
                isPalindrome = false;
                break;
            }

        }

        console.log(isPalindrome);
    }

}

palindromeIntegers([32, 2, 232, 1010]);