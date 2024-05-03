function create(input) {
    class Cat {
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }
    
        meow(params) {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    
    cats = input.reduce((acc, curr) => {
        let [name, age] = curr.split(" ");
        acc[name] = age;
        return acc;
    } , {});

    Object.entries(cats).map(([name, age]) => {
        cat = new Cat(name, age);
        cat.meow();
    });

}

create(['Mellow 2', 'Tom 5']);