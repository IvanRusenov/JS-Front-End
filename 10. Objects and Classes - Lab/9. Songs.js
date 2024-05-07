function printSongNameByType(input) {

    class Song {

        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

    }

    let n = input.shift();
    let type = input.pop();
    let songs = [];

    input.forEach(el => {
        let [type, songName, time] = el.split("_");
        songs.push(new Song(type, songName, time));
    });


    if (type === "all") {
        songs.forEach(el => {
            console.log(el.name);
        })
    } else {
        songs.forEach(el => {
            if (el.typeList === type) {
                console.log(el.name);
            }
        })
    }

}

printSongNameByType([4, "favourite_DownTown_3:14", "listenLater_Andalouse_3:24", "favourite_In To The Night_3:58", "favourite_Live It Up_3:48", "listenLater"]);