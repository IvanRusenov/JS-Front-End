function fruit (fruit, weight, kgPrice) {
        weight /=1000;
    let money = weight * kgPrice;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}


fruit('apple', 1563, 2.35);