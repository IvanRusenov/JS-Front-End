function solve (string) {
    let newArr = string.split(/(?=[A-Z])/);

    console.log(newArr.join(", "))

}




solve('SplitMeIfYouCanHaHaYouCantOrYouCan');