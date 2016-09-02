function invertCase(str) {
    return str.split("").map(function(x) {
        if(x.toUpperCase()===x) {return x.toLowerCase();} else {
            return x.toUpperCase();}}).join("");
}
