
function logType(arg) {
    if (arg===undefined) {console.log('"undefined!"');}
    else if (arg==null) {console.log('"null!"');}
    else if (typeof arg==='number') {console.log('"number!"');}
    else if (typeof arg==='string') {console.log('"string!"');}
    else if (typeof arg==='boolean') {console.log('"boolean!"');}
    else if (typeof arg==='function') {console.log('"function!"');}
    else if (Array.isArray(arg)===true) {console.log('"array!"');}
    else if (typeof arg==='object') {console.log ('"object!"');}
    else if (isNaN(arg)===true) {console.log('"not a number!"');}
    else {console.log ('"I have no idea!"');}
}


logType();
