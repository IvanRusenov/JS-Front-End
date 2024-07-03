function solution(input) {

    let numberOfRiders = input.shift();
    let ridersDetails = input.splice(0, Number(numberOfRiders));
    input.pop();
    let riders = [];
    ridersDetails.forEach(r => {
        const [name, fuel, position] = r.split("|");

        let rider = {
            name,
            fuel: Number(fuel),
            position: Number(position),
        }

        riders.push(rider);

    });

    input.forEach(c => {

        const [command, ...otherInfo] = c.split(" - ");

        if (command === "StopForFuel") {
            let riderName = otherInfo[0];
            let minimumFuel = otherInfo[1];
            let changedPosition = otherInfo[2];
            
            let rider = riders.filter(r => r.name === riderName)[0];
            if (rider.fuel < minimumFuel) {
                rider.position = Number(changedPosition);
                rider.fuel = 100;
                console.log(`${rider.name} stopped to refuel but lost his position, now he is ${rider.position}.`)
            } else {
                console.log(`${rider.name} does not need to stop for fuel!`)
            }


        } else if (command === "Overtaking") {

            let rider1 = riders.filter(r => r.name === otherInfo[0])[0];
            let rider2 = riders.filter(r => r.name === otherInfo[1])[0];
            if (Number(rider1.position) < Number(rider2.position)) {
                pos1 = rider1.position;
                pos2 = rider2.position;
                rider1.position = pos2;
                rider2.position = pos1;
                console.log(`${rider1.name} overtook ${rider2.name}!`)
            }

        } else if (command === "EngineFail") {

            let rider = otherInfo[0];
            let lapsLeft = otherInfo[1];
            let target = riders.filter(r => r.name === rider)[0];
            let index = riders.indexOf(target);
            riders.splice(index, 1);
            console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)

        }

    });

    riders.forEach((r) => {
        console.log(r.name);
        console.log(`  Final position: ${r.position}`);
    });
}
solution((["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
)

solution((["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])
);