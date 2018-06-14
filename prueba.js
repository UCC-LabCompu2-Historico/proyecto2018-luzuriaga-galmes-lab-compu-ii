El siguiente código permite mover con el teclado una imagen sobre el canvas de HTML5.


<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">

    <script>

var x=200, y=400;//coordenadas iniciales de la imagen

function lienzo(){

    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var img=document.getElementById("ima");
    ctx.clearRect(0,0,500,500);//limpia todo el canvas
    ctx.drawImage(img,x,y);//dibuja la imagen

}

//cuando presiona una tecla
function whichButton(event){

    if(event.keyCode=='39'){//si la tecla presionada es direccional derecho

        x=x+5;//mueve la nave 5 pixeles a la derecha
        lienzo();

    }

    if(event.keyCode=='37'){//si la tecla presionada es direccional izquierdo

        x=x-5;//mueve la nave 5 pixeles a la izquierda
        lienzo();

    }

    if(event.keyCode=='38'){//si la tecla presionada es direccional arriba

        y=y-5;//sube la nave
        lienzo();

    }

    if(event.keyCode=='40'){// si la tecla presionada es direccional abajo

        y=y+5;//baja la nave
        lienzo();

    }

}

</script>

</head>

<body onkeydown="whichButton(event)" onload="lienzo()">

    <h1>Movimiento de una imagen sobre canvas HTML5 + JavaScript</h1>

<img id="ima" src="nave.PNG" />

    <canvas id="myCanvas" width="500" height="500" style="border:1px solid #000000;background-color:#87CEEB;">
    Tu navegador no soporta canvas</canvas>

</body>

</html>