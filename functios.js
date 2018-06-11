/*function dibujar() {
    var ctx=document.getElementById('myCanvas').getContext('2d');
    var image = new Image ();
    image.src= "autoprueb.png" ;
    ctx.drawImage(image,0,100,65,65);
    setInterval(mover,100)
}

function mover(){
    var ctx=document.getElementById('myCanvas').getContext('2d');
    var image = new Image ();
    image.src= "autoprueb.png" ;
    ctx.drawImage(image,0,0,100,100);
}


var img = new Image();
img.src = 'autoprueb.png';
var coorX = 0, coorY = 400;
var t = 0;

function dibujarImagenCanvas(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var coorX, coorY;
    coorX = Number(document.getElementById('posicionX').value);
    coorY = Number(document.getElementById('posicionY').value);
    canvas.width = canvas.width;
    var img = new Image();
    img.src = 'autoprueb.png';
    ctx.drawImage(img, coorX, coorY);
}

function dibujarImagenCanvasAnimacion() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

    ctx.drawImage(img, coorX, 600-127 + (-1 * coorY));
}

var velX = 25;
var velY = 100;
var int;
function animar() {
    var cant = 0;
    int = setInterval(function () {
        t += 0.1;
        coorX = t * velX;
        coorY = t * velY + 1 / 2 * t * t * -9.8;

        if(coorY<0)
            clearInterval(int);

        dibujarImagenCanvasAnimacion();
        console.log("X " + coorX + "   Y " + coorY)
    } //1000 / 30)
*/