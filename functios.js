function calculardistancia() {
    var Auto = document.getElementById("Auto").value;
    var Moto = document.getElementById("Moto").value;
    var Camion = document.getElementById("Camion").value;
    var Colectivo = document.getElementById("Colectivo").value;
    var Camioneta = document.getElementById("Camioneta").value;
    var Traffic = document.getElementById("Traffic").value;
    var Asfalto = document.getElementById("Asfalto").checked;
    var Cemento = document.getElementById("Cemento").checked;
    var Tierra = document.getElementById("Tierra").checked;
    var Nieve = document.getElementById("Nieve").checked;
    var Kmporh = document.getElementById("Km/h").value;
    var mpors = document.getElementById("m/s").value;
    var vehiculo = document.getElementById("vehiculo").value;
    var unidad = document.getElementById("unidad").value;
    var velocidad = document.getElementById("velocidad").value;
    var coefroz;


    var resultado;
    var url = "Resultados.html#res=" + resultado;
    document.location.assign(url);

    if (vehiculo === "Auto") {
        if (Asfalto === true) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.7;
                }
                else {
                    coefroz = 0.63;
                }
            }
        }
        if (Cemento) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.7;
                }
                else {
                    coefroz = 0.67;
                }
            }
        }
        if (Tierra) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.65;
                }
                else {
                    coefroz = 0.65;
                }
            }
        }
        if (Nieve) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.17;
                }
                else {
                    coefroz = 0.15;
                }
            }
        }
    }

    if (vehiculo === Moto) {
        if (Asfalto === true) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.7;
                }
                else {
                    coefroz = 0.63;
                }
            }
        }
        if (Cemento) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.7;
                }
                else {
                    coefroz = 0.67;
                }
            }
        }
        if (Tierra) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.65;
                }
                else {
                    coefroz = 0.65;
                }
            }
        }
        if (Nieve) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.17;
                }
                else {
                    coefroz = 0.15;
                }
            }
        }
    }
    if (vehiculo === Camion) {
        if (Asfalto === true) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.7;
                }
                else {
                    coefroz = 0.63;
                }
            }
        }
        if (Cemento) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.7;
                }
                else {
                    coefroz = 0.67;
                }
            }
        }
        if (Tierra) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.65;
                }
                else {
                    coefroz = 0.65;
                }
            }
        }
        if (Nieve) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.17;
                }
                else {
                    coefroz = 0.15;
                }
            }
        }
    }
    if (vehiculo === Colectivo) {
        if (Asfalto === true) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.7;
                }
                else {
                    coefroz = 0.63;
                }
            }
        }
        if (Cemento) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.7;
                }
                else {
                    coefroz = 0.67;
                }
            }
        }
        if (Tierra) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.65;
                }
                else {
                    coefroz = 0.65;
                }
            }
        }
        if (Nieve) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.17;
                }
                else {
                    coefroz = 0.15;
                }
            }
        }
    }
    if (vehiculo === Camioneta) {
        if (Asfalto === true) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.7;
                }
                else {
                    coefroz = 0.63;
                }
            }
        }
        if (Cemento) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.7;
                }
                else {
                    coefroz = 0.67;
                }
            }
        }
        if (Tierra) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.65;
                }
                else {
                    coefroz = 0.65;
                }
            }
        }
        if (Nieve) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.17;
                }
                else {
                    coefroz = 0.15;
                }
            }
        }
    }
    if (vehiculo === Traffic) {
        if (Asfalto === true) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.7;
                }
                else {
                    coefroz = 0.63;
                }
            }

        }
        if (Cemento) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.7;
                }
                else {
                    coefroz = 0.67;
                }
            }
        }
        if (Tierra) {
            if (unidad === "Kmporh") {
                velocidad = velocidad / 3.6;
                if (velocidad < 50) {
                    coefroz = 0.65;
                }
                else {
                    coefroz = 0.65;
                }
            }
        }
    }
    if (Nieve) {
        if (unidad === "Kmporh") {
            velocidad = velocidad / 3.6;
            if (velocidad < 50) {
                coefroz = 0.17;
            }
            else {
                coefroz = 0.15;
            }
        }
    }


    resultado = (velocidad * velocidad) / (2 * 9.8 * coefroz);
}

var cnv, ctx, pos_x = 0, img, imgpie;

imgpie = new Image();
imgpie.src = 'Piedra.png';

imgboom = new Image();
imgboom.src = 'boom.jpg';

imgarbol = new Image();
imgarbol.src = 'Arbol.jpg';

function dibujar() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgpie, 250, 101, 50, 50);

}

window.onload = function () {
    img = new Image();
    img.src = 'autoprueb.png';
    cnv = document.getElementById('myCanvas');
    ctx = cnv.getContext('2d');
    anim();
}

function dibujarboom() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgboom, 223, 77, 70, 70);
}


function dibujararbol() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgarbol, 230, 30, 70, 130);

}


function anim() {
    ctx.clearRect(0, 0, 600, 200);
    ctx.drawImage(img, pos_x, 90, 75, 75);
    dibujararbol();
    pos_x += 1;
    if (pos_x > 170) {
        dibujararbol();
        ctx.drawImage(img, 170, 90, 75, 75);
        dibujarboom();
        //setTimeout(onpause);
    }

    setTimeout(anim, 50);
}


/* function dibujarImagenCanvasAnimacion() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, coorX +1, coorY));
}

var velX = 25;
var int;

function animar() {
    var cant = 0;
    int = setInterval(function () {
        t += 0.1;
        coorX = t * velX;
        coorY = 0;

        if(coorX>canvas.width)
            clearInterval(int);

        dibujar();

    }1000/30)
}


function dibujar(){
    var ctx=document.getElementById('myCanvas').getContext('2d');
    var image = new Image ();
    image.src= "autoprueb.png" ;
    var coorX = 0, coorY = 90;
    var height=75, width=75;
    //  var t = 0;
    ctx.drawImage(image,coorX,coorY,height,width);
}






function mover(){
    var ctx=document.getElementById('myCanvas').getContext('2d');
    var image = new Image ();
    image.src= "autoprueb.png" ;
    ctx.drawImage(image,0,0,100,100);
}






function dibujarImagenCanvas(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = 'autoprueb.png';
    var coorX = 0, coorY = 10;
    var t = 0;

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
    }1000/30)
*/
