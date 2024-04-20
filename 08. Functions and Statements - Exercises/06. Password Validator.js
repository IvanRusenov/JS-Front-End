function passwordValidator(pass) {
    
    isAllValid = true;

    function isAllSymbolsValid() {

        if (/[^A-Za-z0-9]/.test(pass)) {
            isAllValid = false;
            console.log("Password must consist only of letters and digits");
        } 
    }

    function isValidLength() {

        if (pass.length < 6 || pass.length > 10) {

            isAllValid = false;
            console.log("Password must be between 6 and 10 characters");

        }
    }

    function isTwoDigits() {

        let count = 0;

        for (const char of pass) {
            if (Number(char)) {
                count++;
            }
        }

        if (count < 2) {
            isAllValid = false;
            console.log("Password must have at least 2 digits");
        }

    }

    isAllSymbolsValid();
    isValidLength();
    isTwoDigits();


    if (isAllValid) {
        console.log("Password is valid");
    }

}

passwordValidator("Ivan123");