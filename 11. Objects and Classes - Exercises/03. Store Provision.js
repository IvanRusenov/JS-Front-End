function solve(stock, order) {

    let products = {};
    let name;
    let quantity;

    for (let i = 0; i < stock.length - 1; i+=2) {

        name = stock[i];
        quantity = Number(stock[i + 1]);

        products[name] = quantity;
    }

    for (let i = 0; i < order.length - 1; i += 2) {

        name = order[i];
        quantity = Number(order[i + 1]);


        if (products.hasOwnProperty(name)) {
            products[name] += quantity;
        } else {
            products[name] = quantity;
        }
    }

    Object.entries(products).forEach(([k,v]) => {
        console.log(`${k} -> ${v}`);
    })

}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);