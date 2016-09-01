function getLessThanZero(arr) {
    var less = arr.filter(function(x) {
        return x<0;
    });
    return less;
}
