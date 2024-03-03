function circleAreaa(r) {
    if (typeof(r) != `number`) {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(r)}.`);
    } else {
        console.log((Math.PI * Math.pow(r, 2)).toFixed(2));
    }
}


circleAreaa("");