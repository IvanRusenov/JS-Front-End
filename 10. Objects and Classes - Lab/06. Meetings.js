function meetings(input) {

    let schedule = {};

    for (const el of input) {
        let day = el.split(" ")[0];
        let name = el.split(" ")[1];
        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    Object.entries(schedule).forEach(([day, name]) => console.log(`${day} -> ${name}`));
}

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']

);