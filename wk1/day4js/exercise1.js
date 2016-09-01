
function each(obj, func) {
    if (Object.getPrototypeOf(obj) === Object.prototype){
        for (var prop in obj) {
            func(obj[prop], prop);
        }
    }
    else {
        for (var i=0;i<obj.length;i++){
            func(obj[i], i);
        }
    }
}
