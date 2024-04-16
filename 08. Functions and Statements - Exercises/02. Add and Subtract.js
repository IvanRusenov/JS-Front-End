function addAndSubtract(n1, n2, n3) {
    function sum() {
        return n1 + n2;
    }

    function subtract() {
        return sum() - n3;
    }

    return subtract();
}

console.log(addAndSubtract(1, 2, 7))