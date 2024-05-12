function registerForHeroes(input) {

    let heroes = [];
    input.forEach(el => {
        let [heroName,  heroLevel, items] = el.split(" / ");

        let hero = {
            "name": heroName,
            "level": Number(heroLevel),
            "items": items
        }
        heroes.push(hero);
    })

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(el => {
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    })

};

registerForHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);


registerForHeroes ([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    );