
function askForNumber(){
    var number = prompt("Choose a number between 1-10");
    var err = new Error ("not a valid number");
    if(number>10 || number<1)
    throw (err);
    return(number);

}

function translateNumberToGerman () {
    var arr = ["eins", "zwei","drei","vier","funf","sechs","sieben","acht","neun","zehn"];


    try {
        console.log(arr[askForNumber()-1]);
        return arr[askForNumber()-1];
    }
    catch (err){
        console.log(err);
        translateNumberToGerman ()
    }

}


translateNumberToGerman();
