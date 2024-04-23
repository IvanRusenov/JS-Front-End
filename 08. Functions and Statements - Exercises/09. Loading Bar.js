function loadingBar (n) {

    let percentGrafics = "%".repeat(n/10) + ".".repeat(10-(n/10));

    if (n !== 100) {
        console.log(`${n}% [${percentGrafics}]`);
        console.log("Still loading...");
    }else{
        console.log("100% Complete!");
    }

}

loadingBar(56.26);