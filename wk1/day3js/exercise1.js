function sumAll() {
    var sum=0;
    for (var i=0; i<arguments.length; i++) {
        sum+=arguments[i];
    }
    return sum;
}
sumAll(4,5,7,8,9);
