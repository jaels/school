

(function() {
    var box = document.getElementsByClassName("box")[0];
    box.addEventListener("mousemove", function() {
        var x = event.clientX;
        var y = event.clientY;
        box.style.left = x - 50 + "px";
        box.style.top = y - 50 + "px";
    });
})();
