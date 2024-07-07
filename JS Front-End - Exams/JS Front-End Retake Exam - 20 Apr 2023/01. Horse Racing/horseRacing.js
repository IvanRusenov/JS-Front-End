function horseRacing(input) {
    input.pop();
    let horsesDetails = input.splice(0, 1);
    let horses = horsesDetails[0].split("|");

    input.forEach(c => {

        let [command, ...other] = c.split(" ");
        if (command === "Retake") {
            let overtaking = other[0];
            let overtaken = other[1];
            let overtakingIndex = horses.indexOf(overtaking);
            let overtakenIndex = horses.indexOf(overtaken);

            if (overtakingIndex < overtakenIndex) {
                let horse1 = horses[overtakenIndex];
                let horse2 = horses[overtakingIndex];

                horses[overtakingIndex] = horse1;
                horses[overtakenIndex] = horse2;
                console.log(`${overtaking} retakes ${overtaken}.`);
            }


        } else if (command === "Trouble") {
            let horseName = other[0];
            let position = horses.indexOf(horseName);
            if ((position - 1) >= 0) {

                horses.splice(position, 1);
                horses.splice((position - 1), 0, horseName);

                console.log(`Trouble for ${horseName} - drops one position.`);
            }

        } else if (command === "Rage") {
            let horseName = other[0];
            let index = horses.indexOf(horseName);
            if (index + 2 < horses.length - 1) {
                horses.splice(index, 1);
                index += 2;
                horses.splice(index, 0, horseName);
            } else {
                horses.splice(index, 1);
                horses.push(horseName);
            }
            console.log(`${horseName} rages 2 positions ahead.`);

        } else if (command === "Miracle") {
            horses.push(horses.shift());
            console.log(`What a miracle - ${horses[horses.length - 1]} becomes first.`);
        }

    });
    console.log(horses.join("->"));
    console.log(`The winner is: ${horses[horses.length - 1]}`);


}

// horseRacing((['Bella|Alexia|Sugar',
//     'Retake Alexia Sugar',
//     'Rage Bella',
//     'Trouble Bella',
//     'Finish'])
// );

// horseRacing((['Onyx|Domino|Sugar|Fiona',
// 'Trouble Onyx',
// 'Retake Onyx Sugar',
// 'Rage Domino',
// 'Miracle',
// 'Finish'])
// );

// horseRacing((['Fancy|Lilly',
// 'Retake Lilly Fancy',
// 'Trouble Lilly',
// 'Trouble Lilly',
// 'Finish',
// 'Rage Lilly'])
// );