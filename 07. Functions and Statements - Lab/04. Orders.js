function others(item, count) {
    switch (item) {
        case "coffee":
            console.log((count * 1.50).toFixed(2));
            break;
        case "water":
            console.log(count.toFixed(2));
            break;
        case "coke":
            console.log((count * 1.40).toFixed(2));
            break;
        case "snacks":
            console.log((count * 2).toFixed(2));
            break;

    }
}

others();