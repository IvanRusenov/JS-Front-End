function solve (input){
    let movies = [];
    input.forEach(el => {
        if(el.includes("addMovie")){
            movies.push({name: el.slice(9)})
            //...
        }else if (el.includes("directedBy")){

            movieName = el.slice(0, el.indexOf("directedBy")-1) 
            movies.forEach(m => {
                if (m["name"]===movieName){
                    m["director"] = el.slice(el.indexOf("directedBy") + 11) 
                }
            });
            //...
        }else if (el.includes("onDate")) {
            movieName = el.slice(0, el.indexOf("onDate")-1);
            movies.forEach(m=> {
                if(m["name"]=== movieName){
                    m["date"] = el.slice(el.indexOf("onDate") + 7);
                }
            })
            //...
        }
    });

    movies.forEach(m => {
        if(m["name"] && m["director"] && m["date"]){
            console.log(JSON.stringify(m))
        }
    })
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );