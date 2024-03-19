function roadRadar(speed, area) {

    let isInLimits = false;
    let speedLimit = null;

    if (area == "motorway") {

        speedLimit = 130;

    } else if (area == "interstate") {

        speedLimit = 90;

    } else if (area == "city") {

        speedLimit = 50;

    } else if (area == "residential") {

        speedLimit = 20;

    }

    if (speed <= speedLimit) {

        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);

    } else {

        let speeding = speed - speedLimit;
        let status = "speeding";

        if (speeding > 40) {

            status = "reckless driving";

        } else if (speeding > 20) {

            status = "excessive speeding";

        }

        console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        
    }

}

roadRadar(200, 'motorway');