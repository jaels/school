
var headlines = document.getElementsByClassName('list');
var container = document.getElementById('container');
var moveLeft = 1000;

function moveHeadLines() {

   moveLeft = moveLeft - 2;
    container.style.left = moveLeft + "px";




    if (headlines[0].style.left <= 0 + "px") {
       var firstChild = container.childNodes[0];
       console.log(firstChild);
        container.removeChild(firstChild);
       container.appendChild(firstChild);
    }



window.requestAnimationFrame(moveHeadLines);


}

window.requestAnimationFrame(moveHeadLines);
