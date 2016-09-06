(function() {
    var box = document.getElementsByClassName('box')[0];
    box.addEventListener('mousedown', function() {
        var num1 = Math.floor(Math.random() * 255);
        var num2 = Math.floor(Math.random() * 255);
        var num3 = Math.floor(Math.random() * 255);
        box.style.background = "rgb" + "(" + num1 + "," + num2 + "," + num3 + ")";
    });
    box.addEventListener('mouseup', function() {
        var num1 = Math.floor(Math.random() * 255);
        var num2 = Math.floor(Math.random() * 255);
        var num3 = Math.floor(Math.random() * 255);
        box.style.background = "rgb" + "(" + num1 + "," + num2 + "," + num3 + ")";
    });

})();
