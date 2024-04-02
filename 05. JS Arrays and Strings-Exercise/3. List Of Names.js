function solve(namesArr) {

    namesArr.sort((a, b) => a.localeCompare(b));

    let i = 0;
    for (const el of namesArr) {
        i++;
        console.log(`${i}.${el}`);
    }

}

solve(["John", "Bob", "christina", "Ema"]);