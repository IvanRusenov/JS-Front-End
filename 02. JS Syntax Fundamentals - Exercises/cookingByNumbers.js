function cookingByNumbers(n, a, b, c, d, e) {

    n = Number(n);

    function inner (command){
        switch (command) {
            case "chop":
                n /= 2;
                break;
            case "dice":
                n = Math.sqrt(n);
                break;
            case "spice":
                n++;
                break;
            case "bake":
                n *= 3;
                break;
            case "fillet":
                n *= 0.80;
                break;
        }

        console.log(n.toFixed(1));
    
    }

    inner (a);
    inner (b);
    inner (c);
    inner (d);
    inner (e);

}


cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');