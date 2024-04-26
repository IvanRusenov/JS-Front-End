function printCity(city) {

    Object.keys(city).forEach( key => console.log(`${key} -> ${city[key]}`));

}

printCity({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)