
function million(num) {
    var counter = 0;
    if ((num<=0) || (typeof num!=="number")) return "ERROR";
    else if (num>=1000000) return num;
    else {
        while(num<1000000){
            num=num*10;
            counter+=1;
        }
    }
    return counter;
}
