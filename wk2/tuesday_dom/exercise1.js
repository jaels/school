

(function() {

<!--the original version with just mousemove is in github-->
    function move() {
        var x = event.clientX;
        var y = event.clientY;
        box.style.left = x + "px";
        box.style.top = y + "px";
}

    var box = document.getElementsByClassName("box")[0];

    box.addEventListener("mousedown", function() {
    box.addEventListener("mousemove", move);



});


box.addEventListener("mouseup", function() {

    box.removeEventListener("mousemove", move);


});




})();
