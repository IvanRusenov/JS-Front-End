function solution(input) {

    let numberOfAustronauts = input.shift(0, 1);
    let astronautsDetails = input.splice(0, Number(numberOfAustronauts));

    let astronauts = [];

    astronautsDetails.forEach(a => {

        const [name, oxygen, energy] = a.split(" ");

        let astronaut = {
            name,
            oxygen: Number(oxygen),
            energy: Number(energy)
        }

        astronauts.push(astronaut);
    });

    input.pop();

    input.forEach(c => {
        const [command, name, parameter] = c.split(" - ");

        let astronaut = astronauts.filter(a => a.name === name)[0];
        let amountRecovered;

        if (command === "Explore") {

            if (astronaut.energy >= parameter) {
                astronaut.energy -= parameter;
                console.log(`${astronaut.name} has successfully explored a new area and now has ${astronaut.energy} energy!`);
            } else {
                console.log(`${astronaut.name} does not have enough energy to explore!`);
            }

        } else if (command === "Refuel") {

            if (astronaut.energy + Number(parameter) > 200) {
                amountRecovered = 200 - astronaut.energy;
                astronaut.energy = 200;
            } else {
                astronaut.energy += Number(parameter);
                amountRecovered = Number(parameter);
            }

            console.log(`${astronaut.name} refueled their energy by ${amountRecovered}!`);


        } else if (command === "Breathe") {

            if (astronaut.oxygen + Number(parameter) > 100) {
                amountRecovered = 100 - astronaut.oxygen;
                astronaut.oxygen = 100;
            } else {
                astronaut.oxygen += Number(parameter);
                amountRecovered = parameter;
            }

            console.log(`${astronaut.name} took a breath and recovered ${amountRecovered} oxygen!`);
        }
    });

    astronauts.forEach(a => {
        console.log(`Astronaut: ${a.name}, Oxygen: ${a.oxygen}, Energy: ${a.energy}`);
    })

}

// solution(['3',
//     'John 50 120',
//     'Kate 80 180',
//     'Rob 70 150',
//     'Explore - John - 50',
//     'Refuel - Kate - 30',
//     'Breathe - Rob - 20',
//     'End']
// )

solution(["4",
"Alice 60 100",
"Bob 40 80",
"Charlie 70 150",
"Dave 80 180",
"Refuel - Alice - 30",
"End"])