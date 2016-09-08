(function (){
    var context = document.getElementById('canv').getContext('2d');

    context.strokeStyle = '#00000';
    context.lineWidth=7;
    context.beginPath();
    context.arc(100,100,50,0,2*Math.PI);
    context.moveTo(100,150);
    context.lineTo(100,350);
    context.lineTo(180,500);
    context.moveTo(100,350);
    context.lineTo(20,500);
    context.moveTo(100,200);
    context.lineTo(200,100);
    context.moveTo(100,200);
    context.lineTo(0,100);

    context.stroke();

    var img = document.getElementById("canv");

    var bigger = document.getElementById("bigger").getContext('2d');

    bigger.drawImage(img,0,0);


    var x = 0;
    var y = 0;

    document.addEventListener("keydown", function(e) {
        bigger.clearRect(0, 0, 500, 800);
        switch (e.keyCode) {
            case 37:
            x -=10;
            bigger.drawImage(img,x,y);
            break;
            case 38:
            y -=10;
            bigger.drawImage(img,x,y);
            break;
            case 39:
            x+=10;
            bigger.drawImage(img,x,y);
            break;
            case 40:
            y+=10;
            bigger.drawImage(img,x,y);
            break;
        }
    })


})();
