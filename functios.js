function calculardistancia() {
    var Auto=document.getElementById(Auto).value;
    var Moto=document.getElementById(Moto).value;
    var Camion=document.getElementById(Camion).value;
    var Colectivo=document.getElementById(Colectivo).value;
    var Camioneta=document.getElementById(Camioneta).value;
    var Traffic=document.getElementById(Traffic).value;
    var Asfalto=document.getElementById(Asfalto).value;
    var Cemento=document.getElementById(Cemento).value;
    var Tierra=document.getElementById(Tierra).value;
    var Nieve=document.getElementById(Nieve).value;
    var Kmporh=document.getElementById(Km/h).value;
    var mporh=document.getElementById(m/h).value;
    var vehiculo=document.getElementById(vehiculo).value;
    var unidad=document.getElementById(unidad).value;
    var velocidad=document.getElementById(velocidad).value;

    if (vehiculo == Auto) {
       if(Asfalto) {
           if (unidad == Kmporh) {
                 if (velocidad < 50) {
                     return ((velocidad * velocidad) / 9.8 * 2 * 0.7);
                 }
                 else {
                     return ((velocidad * velocidad) / 9.8 * 2 * 0.63);
                   }


               }
               else {

               }
           }
        if(Cemento) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.7);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.67);
                    }


            }
            else {

            }
        }
        if(Tierra) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.65);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.65);
                    }


            }
            else {

            }
        }
        if(Nieve) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.17);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.15);
                    }

            }
            else {

            }
        }
       }

    if (vehiculo == Moto) {
        if(Asfalto) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.7);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.63);
                }


            }
            else {

            }
        }
        if(Cemento) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.7);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.67);
                }


            }
            else {

            }
        }
        if(Tierra) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.65);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.65);
                }


            }
            else {

            }
        }
        if(Nieve) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.17);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.15);
                }

            }
            else {

            }
        }
    }
    if (vehiculo == Camion) {
        if(Asfalto) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.7);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.63);
                }


            }
            else {

            }
        }
        if(Cemento) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.7);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.67);
                }


            }
            else {

            }
        }
        if(Tierra) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.65);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.65);
                }


            }
            else {

            }
        }
        if(Nieve) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.17);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.15);
                }

            }
            else {

            }
        }
    }
    if (vehiculo == Colectivo) {
        if(Asfalto) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.7);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.63);
                }


            }
            else {

            }
        }
        if(Cemento) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.7);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.67);
                }


            }
            else {

            }
        }
        if(Tierra) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.65);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.65);
                }


            }
            else {

            }
        }
        if(Nieve) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.17);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.15);
                }

            }
            else {

            }
        }
    }
    if (vehiculo == Camioneta) {
        if(Asfalto) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.7);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.63);
                }


            }
            else {

            }
        }
        if(Cemento) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.7);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.67);
                }


            }
            else {

            }
        }
        if(Tierra) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.65);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.65);
                }


            }
            else {

            }
        }
        if(Nieve) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.17);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.15);
                }

            }
            else {

            }
        }
    }
    if (vehiculo == Traffic) {
        if(Asfalto) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.7);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.63);
                }


            }
            else {

            }
        }
        if(Cemento) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.7);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.67);
                }
            }
            else {

            }
        }
        if(Tierra) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.65);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.65);
                }


            }
            else {

            }
        }
        if(Nieve) {
            if (unidad == Kmporh) {
                if (velocidad < 50) {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.17);
                }
                else {
                    return ((velocidad * velocidad) / 9.8 * 2 * 0.15);
                }

            }
            else {

            }
        }
    }


}












function dibujar() {
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
