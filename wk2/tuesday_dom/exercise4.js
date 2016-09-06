(function() {
    var box = document.getElementsByClassName('big-box')[0];
    box.addEventListener('mousedown', function() {
        var num1 = Math.floor(Math.random() * 255);
        var num2 = Math.floor(Math.random() * 255);
        var num3 = Math.floor(Math.random() * 255);
        box.style.background = "rgb" + "(" + num1 + "," + num2 + "," + num3 + ")";
    });

    var box1 = document.getElementsByClassName('small-box')[0];
    box1.addEventListener('mousedown', function(e) {
        e.stopPropagation();
        var num1 = Math.floor(Math.random() * 255);
        var num2 = Math.floor(Math.random() * 255);
        var num3 = Math.floor(Math.random() * 255);
        box1.style.background = "rgb" + "(" + num1 + "," + num2 + "," + num3 + ")";
    });




})();
