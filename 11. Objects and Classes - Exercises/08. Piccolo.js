function parking (input) {

    let carsArr = [];

    input.forEach(el => {
        const [direction, carNumber] = el.split(", ");
        if (direction === "IN" && !carsArr.includes(carNumber)){
            carsArr.push(carNumber);
        }else if (direction === "OUT" && carsArr.includes(carNumber)){
         carsArr.splice(carsArr.indexOf(carNumber), 1);
        }
    });

    if(carsArr.length !== 0){
        carsArr.sort((a, b) => a.localeCompare(b)).forEach(car => console.log(car));
    }else{
        console.log("Parking Lot is Empty");
    }

}

parking(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, PB1128CB',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);

parking(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);