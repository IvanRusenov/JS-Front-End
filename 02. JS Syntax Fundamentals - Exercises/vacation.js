function vacation(personsInGroup, groupType, day) {
    let priceForPerson = 0;
    let totalPrice = 0;

    switch (groupType) {
        case "Students":
            if (day === "Friday") {
                priceForPerson = 8.45;
            } else if (day === "Saturday") {
                priceForPerson = 9.80;
            } else if (day === "Sunday") {
                priceForPerson = 10.46;
            }

            if (personsInGroup >= 30) {
                totalPrice = (priceForPerson * personsInGroup) * 0.85;
            }else {
                totalPrice = priceForPerson * personsInGroup;
            }
            break;
        case "Business":
            if (day === "Friday") {
                priceForPerson = 10.90;
            } else if (day === "Saturday") {
                priceForPerson = 15.60;
            } else if (day === "Sunday") {
                priceForPerson = 16;
            }

            if (personsInGroup >= 100) {
                totalPrice = priceForPerson * (personsInGroup - 10);
            }else {
                totalPrice = priceForPerson * personsInGroup;
            }
            break;
        case "Regular":
            if (day === "Friday") {
                priceForPerson = 15;
            } else if (day === "Saturday") {
                priceForPerson = 20;
            } else if (day === "Sunday") {
                priceForPerson = 22.50;
            }

            if (personsInGroup >= 10 && personsInGroup <=20) {
                totalPrice = (priceForPerson * personsInGroup) * 0.95;
            }else {
                totalPrice = priceForPerson * personsInGroup;
            }
            break;
    }


    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}


vacation (100, "Regular", "Saturday");